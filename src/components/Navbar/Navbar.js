import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="links">
        <h1>Stock Analysis</h1>
        <Link className="nl nav-item" to="/">
          Home
        </Link>
        <Link className="nl nav-item" to="/data">
          Data
        </Link>
        <Link className="nl nav-item" to="/analysis">
          Analysis
        </Link>
        <Link className="nl nav-item" to="/moving">
          Moving
        </Link>
        <Link className="nl nav-item" to="/correlation">
          Correlation
        </Link>
        <Link className="nl nav-item" to="/prediction">
          Prediction
        </Link>
        <Link className="nl nav-item" to="/documentation">
          Documentation
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
