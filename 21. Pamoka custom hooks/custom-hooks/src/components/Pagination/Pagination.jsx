import axios from "axios";
import usePaginate from "../../hooks/usePaginate";
import React, { useEffect, useState } from "react";

export default function Pagination() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data); //ta response noresim setinti savo state'ui
      })
      .catch((error) => console.log(error));
  }, []);

  const paginated = usePaginate(posts, 5); //uztenka pilnai paprasto kintamojo, nereikia state variable, kadangi cia mum jau realiai grazina state variable, kuris buvo ka tik paupdateintas, del to mum teisinga info issisaugos
  console.log(paginated);

  return (
    <div>
      <pre>{JSON.stringify(paginated)}</pre>
    </div>
  );
}
//nereikia state variable, nes cia jau realiai grazina state variable
