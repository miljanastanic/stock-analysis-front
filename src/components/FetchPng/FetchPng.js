import { useEffect, useState } from "react";
import "./FetchPng.css";

const FetchPng = ({ endpoint = "", param1 = "", param2 = "", param3 = "" }) => {
  const [img, setImg] = useState();
  const baseUrl = "http://localhost:5000";
  const url = `${baseUrl}/${endpoint}`;

  if (param1) {
    url += `?day1=${param1}`;
  }

  if (param2) {
    url += `${param1 ? "&" : "?"}day2=${param2}`;
  }

  if (param3) {
    url += `${param1 || param2 ? "&" : "?"}day3=${param3}`;
  }

  const fetchImage = async () => {
    const res = await fetch(url);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };

  useEffect(() => {
    fetchImage();
    console.log("here");
  }, [endpoint]);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="rectangle2">
          <div className="col-md-6">
            <img
              className="img-fluid mx-auto"
              src={img}
              alt="Large PNG image"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FetchPng;
