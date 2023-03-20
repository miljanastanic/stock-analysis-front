import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [values, setValues] = useState(null);

  useEffect(() => {
    fetch(url).then((res) => {
      if (!res.ok) {
        throw Error("could not fetch the data for that resource");
      }
      res.json().then((response) => {
        setValues(response);
      });
    });
  }, []);

  console.log(values, "values");

  return { values };
};

export default useFetch;
