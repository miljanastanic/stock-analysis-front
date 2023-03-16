import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    console.log("komponenta");
  });

  return <h2>This is home component</h2>;
};

export default Home;
