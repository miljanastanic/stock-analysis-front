import { useEffect } from "react";
import { Container } from "react-bootstrap";

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
            <button
              type="button"
              className="btn text-center w-25 p-3 btn-outline-dark rounded-pill"
            >
              View data
            </button>
          </div>
        </div>

        <div className="column mt-5">
          <h1>See documentation</h1>
          <p>
            See the documentation for this project buy clicking on one of the
            links:
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
