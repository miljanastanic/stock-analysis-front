import { useEffect, useState } from "react";
import "./FetchData.css";

const FetchData = () => {
  const [values, setValues] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/data").then((res) => {
      res.json().then((response) => {
        setValues(response);
      });
    });
  }, []);

  console.log(values, "values");

  if (!values) {
    return (
      <div className="container">
        <div className="justify-content-center text-center fs-6">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="rectangle">
          <table
            className="table table-borderless table-d my-table"
            id="csstable"
          >
            <thead>
              <tr className="tr-green">
                <th>Date</th>
                <th>Open</th>
                <th>Close</th>
                <th>High</th>
                <th>Low</th>
                <th>Volume</th>
                <th>Company</th>
              </tr>
            </thead>
            <tbody>
              {values.map((item) => (
                <tr className="tr-grey" key={item.id}>
                  <td>{item.date}</td>
                  <td>{item.open}</td>
                  <td>{item.high}</td>
                  <td>{item.low}</td>
                  <td>{item.close}</td>
                  <td>{item.volume}</td>
                  <td>{item.company_name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FetchData;
