import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [values, setValues] = useState(null);

  useEffect(() => {
    fetch(url).then((res) => {
      res.json().then((response) => {
        setValues(response);
      });
    });
  }, []);

  console.log(values, "values");

  return { values };
};

export default useFetch;
