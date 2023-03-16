import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/js/dist/dropdown";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="container-fluid">
      <div className="row">
        <div className="bg-dark col-auto pt-3 col-md-2 min-vh-100 d-flex justify-content-between flex-column">
          <div>
            <a className="text-decoration-none text-white d-none d-sm-inline d-flex align-itemcenter">
              <span className="ms-3 fs-3">Stock Analysis</span>
            </a>
            <hr />
            <hr className="text-secondary" />
            <ul class="nav nav-pills flex-column ">
              <li class="nav-item text-white fs-5 my-2">
                <Link class="nav-link text-white fs-5" to="/">
                  <i class="bi bi-house"></i>
                  <span className="ms-2 d-none d-sm-inline">Home</span>
                </Link>
              </li>
              <li class="nav-item text-white fs-5 my-2">
                <Link class="nav-link text-white fs-5" to="/data">
                  <i class="bi bi-database"></i>
                  <span className="ms-2 d-none d-sm-inline">Data</span>
                </Link>
              </li>
              <li class="nav-item text-white fs-5 my-2">
                <Link class="nav-link text-white fs-5 " to="/analysis">
                  <i class="bi bi-bar-chart"></i>
                  <span className="ms-2 d-none d-sm-inline">Analysis</span>
                </Link>
              </li>
              <li class="nav-item text-white fs-5 my-2">
                <Link class="nav-link text-white fs-5" to="/correlation">
                  <i class="bi bi-diagram-2-fill"></i>
                  <span className="ms-2 d-none d-sm-inline">Correlation</span>
                </Link>
              </li>
              <li class="nav-item text-white fs-5 my-2">
                <Link class="nav-link text-white fs-5" to="/model">
                  <i class="bi bi-activity"></i>
                  <span className="ms-2 d-none d-sm-inline">Predict</span>
                </Link>
              </li>
              <li class="nav-item text-white fs-5 my-2">
                <Link class="nav-link text-white fs-5" to="/documentation">
                  <i class="bi bi-file-text-fill"></i>
                  <span className="ms-2 d-none d-sm-inline">Documenation</span>
                </Link>
              </li>
            </ul>
          </div>
          <div class="dropdown open text-white">
            <a
              class="btn text-decoration-none text-white dropdown-toggle"
              type="button"
              id="triggerId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="bi bi-person-circle"></i>
              <span className="ms-2 d-none d-sm-inline">My profile</span>
            </a>
            <div class="dropdown-menu" aria-labelledby="triggerId">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item disabled" href="#">
                Disabled action
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
