// noresiu, kad jame padarytu requesta ir pramapintu per visus gautus artcile ir juos atvaizduotu

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";
import Article from "../Article/Article";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1); // kad kai uzsikrauna, butu pirmas psl
  const API_KEY = process.env.REACT_APP_API_KEY;
  const { category } = useParams();
  const location = useLocation();

  const observerRef = useRef(null);

  const lastArticleRef = (element) => {
    observerRef.current = new IntersectionObserver((entries) => {
      if (loading) {
        return; // jei atm loadina, reiskia, dar tik uzkraudineja naujus elementus, tai mes nenorim, kad sektu kazkoki elementa, nes principe mes noresim, kad kai uzloadins, sektu kita elementa. Taigi, jeigu loading, tuomet tsg returnina, realiai daugiau nebevykdo kodo
      } // entries yra visi matomi elementai ant ekrano, kurie yra observinami. Susikuriam IntersectionObserver ir paskui pasakysim, kad tu sek butent ten kazkokius elementus. Noresim, kad sektu lastArticle elementa
      if (entries[0].isIntersecting) {
        setPage((prev) => ++prev);
      } // isIntersecting reiskia ar matosi ekrane. Jei matomas ekrane, noresim pakeisti savo page i kita psl. Kai sitas isIntersecting pasidaro true, padarom, kad psl padidetu
    });

    if (element) {
      observerRef.current.observe(element);
    } // susikurem observeri ir dabar norim, kad tas observer kazka realiai observintu. Pasiziurim, ar toks element egzistuoja ir jei taip, uzdedam sekima ant jo
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${category}&apiKey=${API_KEY}&pageSize=5&page=${page}`
      )
      .then((response) => {
        setArticles((prev) => [...prev, ...response.data.articles]); // principe, permusinejam savo state. Jeigu uzkraudineja antra psl.,, bus ne kad prides prie visu articles, tuos naujus, kuriuos gavom, o turesim tiktai antra psl. O kai darom infinite scrolling norim, kad viskas butu is karto. Reikes ankstesnes reiksmes ir grazinsim nauja array, kuriame isspreadinsim praeitas reiksmes, kurias jau pries tai turejom ir po kablelio isidesim naujas, kurias gausim is response. Dabar gausis, kad kiekviena karta prie state pridedinesim visus articles, kuriuos is naujo pafetchinam
        setLoading(false);
      })
      .catch((error) => console.log(error));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      } // Also jeigu 1 observer yra jau uzdetas, ji norim nuimt, nes gali observeris ant keliu elementu uzsidet
    };
  }, [category, page]);

  useEffect(() => {
    setArticles([]);
  }, [location]);

  return (
    <div>
      {articles.map((article, index) => {
        if (index + 1 === articles.length) {
          return (
            <div ref={lastArticleRef} key={index}>
              <Article article={article} key={index} />
            </div>
          );
        } else {
          return (
            <div key={index}>
              <Article article={article} key={index} />
            </div>
          );
        }
      })}
      {loading && (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
}

// vienintelė problema buvo, kad mūsų articles nesiupdeitina kai pasikeičia mūsų page location. Tada aš dar susiimportavau antrą hooksą iš react-router-dom pavadinimu useLocation. kai jį išsikviečiu matau kokiame dabar esu puslapyje:

//  const location = useLocation();
//  Kai pasikeičia location galiu pravalyti esamus articles:

// useEffect(() => {
// setArticles([]);
// }, [location]);
