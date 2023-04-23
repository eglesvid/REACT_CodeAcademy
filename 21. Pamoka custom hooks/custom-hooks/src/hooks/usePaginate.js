import { useState, useEffect } from "react";

export default function usePaginate(arr, itemsPerPage) {
  const [paginatedData, setPaginatedData] = useState([]); //kad is naujo persirendintu

  useEffect(() => {
    const pageCount = Math.ceil(arr.length / itemsPerPage); //1.step: kiek turesim psl? +apvalinam i virsu
    const paginated = []; //cia desim naujus array
    for (let i = 0; i < pageCount; i++) {
      const start = itemsPerPage * i; //nuo kurio elemento norim pradet
      paginated.push(arr.slice(start, start + itemsPerPage)); //noresim pradet nuo start ir pabaigt start + itemsPerPage
    }

    setPaginatedData(paginated);
  }, [arr, itemsPerPage]);

  return paginatedData; //kad galetume naudoti komponente
}
