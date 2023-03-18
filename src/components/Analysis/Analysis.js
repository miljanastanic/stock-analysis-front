import { useState } from "react";
import FetchPng from "../FetchPng/FetchPng";

const Analysis = () => {
  const [notActiveButton, setNotActive] = useState(1);
  const [path, setPath] = useState("cv");

  const handleButtonClick = (num) => {
    setNotActive(num);
    switch (num) {
      case 1:
        console.log("cv");
        setPath("cv");
        break;
      case 2:
        console.log("vos");
        setPath("vos");
        break;
      case 4:
        console.log("dr");
        setPath("dr");
        break;
      case 5:
        console.log("adr");
        setPath("adr");
        break;
    }
  };

  return (
    <div className="container">
      <div className="column justify-content-center">
        <div className="row">
          <h1>This is analysis</h1>
          <p>
            Choose the analysis you want to apply from suggested (for more
            details go to documentation), the deafult is closing price:
          </p>
        </div>
        <br></br>
        <div className="d-flex justify-content-around">
          <button
            className={`btn btn-sm mr-2 ${
              notActiveButton === 1 ? "btn-dark" : "btn-outline-dark"
            }`}
            onClick={() => handleButtonClick(1)}
          >
            Closing price
          </button>
          <button
            className={`btn btn-sm mr-2 ${
              notActiveButton === 2 ? "btn-dark" : "btn-outline-dark"
            }`}
            onClick={() => handleButtonClick(2)}
          >
            Volume of sales
          </button>
          <button
            className={`btn btn-sm mr-2 ${
              notActiveButton === 4 ? "btn-dark" : "btn-outline-dark"
            }`}
            onClick={() => handleButtonClick(4)}
          >
            Daily returns
          </button>
          <button
            className={`btn btn-sm mr-2 ${
              notActiveButton === 5 ? "btn-dark" : "btn-outline-dark"
            }`}
            onClick={() => handleButtonClick(5)}
          >
            Average daily returns
          </button>
        </div>
        <br></br>
        <div>
          <FetchPng endpoint={path}></FetchPng>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
