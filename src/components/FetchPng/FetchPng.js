import { useEffect, useState } from "react";
import "./FetchPng.css";

const FetchPng = ({ endpoint }) => {
  const [img, setImg] = useState();
  const baseUrl = "http://localhost:5000";
  const url = `${baseUrl}/${endpoint}`;

  const fetchImage = async () => {
    const res = await fetch(
      url
      // "http://127.0.0.1:5000/moving?day1=20&day2=30&day3=40"
    );
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };

  useEffect(() => {
    fetchImage();

    console.log(endpoint);
  }, [endpoint]);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="rectangle2">
          <img className="img-fluid mx-auto" src={img} alt="Loading"></img>
        </div>
      </div>
    </div>
  );
};

export default FetchPng;
