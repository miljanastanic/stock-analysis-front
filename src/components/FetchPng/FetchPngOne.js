import { useEffect, useState } from "react";
import "./FetchPng.css";

const FetchPngOne = ({ endpoint, params }) => {
  const [img, setImg] = useState();
  const baseUrl = "http://localhost:5000";
  const code = params;

  const queryParams = new URLSearchParams({
    code,
  });
  const url = `${baseUrl}/${endpoint}?${queryParams}`;

  const fetchImage = async () => {
    const res = await fetch(url);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };

  useEffect(() => {
    if (params !== null) {
      console.log(params);
      fetchImage();
    }

    console.log(params);
  }, [endpoint, params]);

  if (!params) {
    return (
      <div className="row justify-content-center">
        <p class="text-center text-decoration-underline">
          Please choose the company for prediction by clicking on a button
        </p>
      </div>
    );
  }

  if (!img) {
    return (
      <div className="justify-content-center text-center fs-6">
        <p class="text-center text-decoration-underline">
          This will take a few minutes because model is training
        </p>
        <br></br>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="rectangle2">
          <img
            className="img-fluid mx-auto"
            src={img}
            alt="Large PNG image"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default FetchPngOne;
