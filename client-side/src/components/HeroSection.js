import React, { useState } from "react";
import DatePicker from "./DatePicker";
import NavBar from "./NavBar";

function HeroSection() {
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  const toggleDatePickerVisibility = () => {
    setIsDatePickerVisible((prevVisibility) => !prevVisibility);
  };

  return (
    <div
      className="hero-section"
      style={{
        height: "100vh",
        backgroundImage: "url(../assets/images/front_view.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        paddingTop: "70px",
      }}
    >
      <NavBar toggleDatePicker={toggleDatePickerVisibility} />

      {isDatePickerVisible && (
        <div
          className="date-picker-container"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            paddingTop: "10px",
            marginTop: "120px",
            padding: "10px",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          }}
        >
          <DatePicker />
        </div>
      )}
      <h1
        className="text-white display-4"
        style={{
          fontFamily: "sans-serif",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          padding: "10px 20px",
        }}
      >
        Welcome to Our GuestHouse
      </h1>
      <p
        className="lead text-white"
        style={{
          fontFamily: "sans-serif",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          padding: "10px 20px",
        }}
      >
        Experience luxury and comfort
      </p>
      <button
        className="btn btn-warning p-2 rounded-0"
        style={{ fontFamily: "sans-serif" }}
      >
        Learn More
      </button>
    </div>
  );
}

export default HeroSection;
