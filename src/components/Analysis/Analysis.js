import { useState } from "react";
import FetchPng from "../FetchPng/FetchPng";

const Analysis = () => {
  const [notActiveButton, setNotActive] = useState(1);
  const [path, setPath] = useState("cv");
  const [days, setDays] = useState(["", "", ""]);

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
  const handleSubmitClick = (num) => {
    setPath("moving");
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
        <br></br>
        {/* <div className="row">
          <h1>The moving avarage</h1>
          <p>For the moving average please chose the number of days:</p>
          <form>
            <div className="row">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="enter number of days"
                  value={days[0]}
                  onChange={(e) => setDays([e.target.value, days[1], days[2]])}
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="enter number of days"
                  value={days[1]}
                  onChange={(e) => setDays([days[0], e.target.value, days[2]])}
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="enter number of days"
                  value={days[2]}
                  onChange={(e) => setDays([days[0], days[1], e.target.value])}
                />
              </div>
              <div class="col-auto">
                <button
                  type="submit"
                  class="btn btn-outline-dark"
                  onClick={() => handleButtonClick()}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
          <FetchPng
            endpoint={path}
            days={days[0] + "," + days[1] + "," + days[2]}
          ></FetchPng>
        </div> */}
      </div>
      <div>
        <FetchPng endpoint={path}></FetchPng>
      </div>
    </div>
  );
};

export default Analysis;
