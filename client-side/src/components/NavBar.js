import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
        padding: "20px 30px",
        fontSize: "1.2rem",
        backgroundColor: "rgba(0, 0, 0, 0.7)", // Dark opaque background
      }}
    >
      <div className="container-fluid">
        <div className="row w-100">
          {/* Logo and company name column */}
          <div className="col-lg-4 d-flex align-items-center">
            {/* Logo */}
            <a className="navbar-brand" href="#">
              <img
                src="../assets/images/logo.jpg"
                alt="Logo"
                style={{
                  width: "70px", // Logo width
                  height: "70px", // Logo height
                }}
              />
            </a>
            <span
              className="ms-3 poppins-regular"
              style={{
                fontSize: "1.2rem",
                color: "#BFA100",
                backgroundColor: "white", 
                padding: "5px 10px",
              }}
            >
              OTJ Pride GuestHouse
            </span>
          </div>

          <div className="col-lg-4 d-flex align-items-center justify-content-center">
            <div className="collapse navbar-collapse" id="navbarContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link active poppins-semibold text-white"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link poppins-regular text-white" href="#">
                    Rooms
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link poppins-regular text-white" href="#">
                    Facilities
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link poppins-regular text-white" href="#">
                    Contacts
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right column with phone number and button */}
          <div className="col-lg-4 d-flex align-items-center justify-content-end">
            <span
              className="me-3 poppins-semibold text-white"
              style={{ fontSize: "1.2rem" }}
            >
              Call us: +123-456-7890
            </span>
            <button
              className="btn btn-warning p-2 rounded-0 poppins-regular text-black"
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
