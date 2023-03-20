import "./App.css";
import FetchData from "./components/FetchData/FetchData";
import FetchPng from "./components/FetchPng/FetchPng";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Analysis from "./components/Analysis/Analysis";
import Correlation from "./components/Correlation/Correlation";
import Prediction from "./components/Prediction/Prediction";
import Moving from "./components/Moving/Moving";
import DocumentationList from "./components/Documentation/DocumentationList";
import DocumentationPage from "./components/Documentation/DocumentationPage";
import DocumentationDetails from "./components/Documentation/DocumentationDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/data" element={<FetchData />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/moving" element={<Moving />} />
          <Route path="/correlation" element={<Correlation />} />
          <Route path="/prediction" element={<Prediction />} />
          <Route path="/documentation" element={<DocumentationPage />} />
          <Route path="/documentation/:id" element={<DocumentationDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
