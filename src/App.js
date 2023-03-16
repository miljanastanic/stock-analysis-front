import "./App.css";
import FetchData from "./components/FetchData/FetchData";
import FetchPng from "./components/FetchPng/FetchPng";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/data" element={<FetchData />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
