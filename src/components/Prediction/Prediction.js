import { useState } from "react";
import FetchPngOne from "../FetchPng/FetchPngOne";

const Prediction = () => {
  const [company, setParam] = useState("GOOG");
  const [notActiveButton, setNotActive] = useState(1);

  const handleButtonClick = (num) => {
    setNotActive(num);
    switch (num) {
      case 1:
        console.log(num);
        setParam("GOOG");
        console.log(company);
        break;
      case 2:
        setParam("AMZN");
        console.log(company);
        break;
      case 4:
        setParam("AAPL");
        console.log(company);
        break;
      case 5:
        setParam("MSFT");
        break;
    }
  };

  return (
    <div className="container">
      <div className="column justify-content-center">
        <div className="row">
          <h1>This is prediction</h1>
          <p>
            Predicting the closing price stock price of one of these companies:
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
            Amazon
          </button>
          <button
            className={`btn btn-sm mr-2 ${
              notActiveButton === 2 ? "btn-dark" : "btn-outline-dark"
            }`}
            onClick={() => handleButtonClick(2)}
          >
            Google
          </button>
          <button
            className={`btn btn-sm mr-2 ${
              notActiveButton === 4 ? "btn-dark" : "btn-outline-dark"
            }`}
            onClick={() => handleButtonClick(4)}
          >
            Microsoft
          </button>
          <button
            className={`btn btn-sm mr-2 ${
              notActiveButton === 5 ? "btn-dark" : "btn-outline-dark"
            }`}
            onClick={() => handleButtonClick(5)}
          >
            Apple
          </button>
        </div>
        <br></br>
        <br></br>
      </div>
      <div>
        <FetchPngOne endpoint={"model"} params={company}></FetchPngOne>
      </div>
    </div>
  );
};

export default Prediction;
