import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
        padding: "20px 30px", 
        fontSize: "1.2rem",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      }}
    >
      <div className="container-fluid">
        <div className="row w-100">
          <div className="col-lg-4 d-flex align-items-center">
            <a
              className="navbar-brand text-white"
              href="#"
              style={{
                fontFamily: "sans-serif",
              }}
            >
              <img
                src="../assets/images/logo.jpg"
                alt="Logo"
                style={{
                  width: "70px",
                  height: "70px",
                }}
              />
            </a>
          </div>

          <div
            className="col-lg-4 d-flex align-items-center justify-content-center"
            style={{ fontFamily: "sans-serif" }}
          >
            <div className="collapse navbar-collapse" id="navbarContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link active text-white"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Rooms
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Facilities
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Contacts
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="col-lg-4 d-flex align-items-center justify-content-end"
            style={{ fontFamily: "sans-serif" }}
          >
            <span className="me-3 text-white" style={{ fontSize: "1.2rem" }}>
              Call us: +123-456-7890
            </span>
            <button
              className="btn btn-warning p-2 rounded-0 text-black"
              type="button"
              style={{ fontSize: "1.2rem" }}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
