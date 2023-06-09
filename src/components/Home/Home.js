import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    console.log("komponenta");
  });

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="column">
          <h1>About</h1>
          <p>
            Time Series data is a series of data points indexed in time order.
            Time series data is everywhere, so manipulating them is important
            for any data analyst or data scientist. In this project we will
            discover data from the stock market, particularly some technology
            stocks (Apple, Amazon, Google, and Microsoft). So let's see the
            dataset we were using for our stock analysis and prediction:
          </p>
          <div className="column text-center">
            <Link to="/data">
              <button
                type="button"
                className="btn text-center w-25 p-3 btn-outline-dark rounded-pill"
              >
                View data
              </button>
            </Link>
          </div>
        </div>

        <div className="column mt-5">
          <h1>See documentation</h1>
          <p>See the documentation for this project: links:</p>
          <div className="column text-center">
            <Link to="/documentation">
              <button
                type="button"
                className="btn text-center w-25 p-3 btn-outline-dark rounded-pill"
              >
                View doc.
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
