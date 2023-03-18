import { useEffect, useState } from "react";
import "./FetchPng.css";

const FetchPngOne = ({ endpoint = "", param1 = "" }) => {
  const [img, setImg] = useState();
  const baseUrl = "http://localhost:5000";
  const code = param1;

  const queryParams = new URLSearchParams({ code });
  const url = `${baseUrl}${endpoint}/?${queryParams}`;

  const fetchImage = async () => {
    const res = await fetch(url);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };

  useEffect(() => {
    fetchImage();
    console.log(param1);
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

export default FetchPngOne;
