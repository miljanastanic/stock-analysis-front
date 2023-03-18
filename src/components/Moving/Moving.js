import { useState } from "react";
import FetchPng from "../FetchPng/FetchPng";
import "./Moving.css";

const Moving = () => {
  const [path, setPath] = useState(null);
  const [show, setShow] = useState(false);
  const [day1, setDay1] = useState("");
  const [day2, setDay2] = useState("");
  const [day3, setDay3] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!day1 || !day2 || !day3) {
      alert("Please enter a valid value for all days.");
      return;
    }

    setLoading(true);

    setPath(`moving?day1=${day1}&day2=${day2}&day3=${day3}`);
    setShow(true);
    setLoading(false);
  };

  return (
    <div className="container">
      <div className="column justify-content-center"></div>
      <div className="row">
        <h1>The moving average</h1>
        <p>For the moving average, please choose the number of days below:</p>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <label className=" col mb-3">
              <input
                type="number"
                placeholder="enter num of days"
                className="form-control form-control-sm border-dark"
                value={day1}
                onChange={(e) => setDay1(e.target.value)}
              />
            </label>
            <label className=" col mb-3">
              <input
                type="number"
                placeholder="enter num of days"
                className="form-control form-control-sm border-dark"
                value={day2}
                onChange={(e) => setDay2(e.target.value)}
              />
            </label>
            <label className="col mb-3">
              <input
                type="number"
                placeholder="enter num of days"
                className="form-control form-control-sm border-dark"
                value={day3}
                onChange={(e) => setDay3(e.target.value)}
              />
            </label>
            <div className="col">
              <button
                type="submit"
                className="btn btn-sm btn-dark"
                disabled={loading}
              >
                {loading ? "Loading..." : "Submit"}
              </button>
            </div>
          </div>
        </form>
      </div>
      <br />
      <div className="column">
        {show ? (
          <FetchPng endpoint={path}></FetchPng>
        ) : (
          <p className="text-center  text-decoration-underline">
            Enter the number of days
          </p>
        )}
      </div>
    </div>
  );
};

export default Moving;
