import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 

function HeroSection() {
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
      }}
    >
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
