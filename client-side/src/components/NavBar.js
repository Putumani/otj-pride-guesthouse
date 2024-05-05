import React, { useState } from "react";
import DatePicker from "./DatePicker";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  const toggleDatePickerVisibility = () => {
    setIsDatePickerVisible((prevVisibility) => !prevVisibility);
  };

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
        padding: "20px 30px",
        fontSize: "1.2rem",
        backgroundColor: "rgba(0, 0, 0, 0.45)",
      }}
    >
      <div className="container-fluid">
        <div className="row w-100">
          <div className="col-lg-4 d-flex align-items-center">
            <a className="navbar-brand" href="#">
              <img
                src="../assets/images/logo.jpg"
                alt="Logo"
                style={{
                  width: "70px",
                  height: "70px",
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
                <li class="nav-item">
                  <a class="nav-link poppins-regular text-white" href="#">
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

          <div className="col-lg-4 d-flex align-items-center justify-content-end">
            <span
              className="me-3 poppins-semibold text-white"
              style={{ fontSize: "1.2rem" }}
            >
              Call us: +123-456-7890
            </span>
            <button
              className="btn btn-warning p-2 rounded-0 text-black"
              type="button"
              style={{ fontSize: "1.2rem" }}
              onClick={toggleDatePickerVisibility}
            >
              Book Now
            </button>
          </div>
        </div>

        {/* DatePicker component */}
        {isDatePickerVisible && (
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              paddingTop: "10px",
              marginTop: "120px",
              padding: "10px",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              zIndex: 1000,
            }}
          >
            <DatePicker />
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
