import { useEffect, useState } from "react";

const FetchPng = () => {
  const [img, setImg] = useState();

  const fetchImage = async () => {
    const res = await fetch("http://localhost:5000/correlation");
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div className="png-view">
      <p>This is correlation image:</p>
      <img src={img} alt="icons"></img>
    </div>
  );
};

export default FetchPng;
