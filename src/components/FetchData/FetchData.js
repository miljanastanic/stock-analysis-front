import { useEffect, useState } from "react";

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
    return <div>Loading...</div>;
  }

  return (
    <div className="Dataframe">
      {values.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            textAlign: "center",
          }}
        >
          <p style={{ width: "33%" }}>{item.id}</p>
          <p style={{ width: "33%" }}>{item.date}</p>
          <p style={{ width: "33%" }}>{item.open}</p>
          <p style={{ width: "33%" }}>{item.high}</p>
          <p style={{ width: "33%" }}>{item.low}</p>
          <p style={{ width: "33%" }}>{item.close}</p>
          <p style={{ width: "33%" }}>{item.volume}</p>
          <p style={{ width: "33%" }}>{item.company_name}</p>
        </div>
      ))}
    </div>
  );
};

export default FetchData;
