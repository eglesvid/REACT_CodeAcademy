import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function News() {
  const NEWS_ENDPOINT = "https://jsonplaceholder.typicode.com/posts";
  const [news, setNews] = useState([]); //pasikuriam, kur saugosim pafetchintas naujienas

  useEffect(() => {
    axios
      .get(NEWS_ENDPOINT)
      .then((res) => {
        setNews(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []); //viduj esanti f-ija visada turi buti sinchronine

  return (
    <div>
      {news.map((item) => {
        return (
          <div key={item.id}>
            <h5>{item.title}</h5>
            <p>{item.body}</p>
          </div>
        );
      })}
    </div>
  );
}
