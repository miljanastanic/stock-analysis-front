import FetchPng from "../FetchPng/FetchPng";

const Correlation = () => {
  return (
    <div className="container">
      <div className="column justify-content-center">
        <div className="row">
          <h1>This is correlation</h1>
          <p>
            Correlation is a statistic that measures the degree to which two
            variables move in relation to each other which has a value that must
            fall between -1.0 and +1.0
          </p>
        </div>
      </div>
      <div>
        <FetchPng endpoint={"correlation"}></FetchPng>
      </div>
    </div>
  );
};

export default Correlation;
