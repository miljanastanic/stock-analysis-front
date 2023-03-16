import "./App.css";
import FetchData from "./components/FetchData/FetchData";
import FetchPng from "./components/FetchPng/FetchPng";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      {/* <FetchData /> */}
      <FetchPng />
    </div>
  );
}

export default App;
