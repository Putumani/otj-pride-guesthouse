import React, { useState } from "react";

const DatePicker = ({ className }) => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  const handleCheckInChange = (e) => {
    const newCheckInDate = e.target.value;
    setCheckInDate(newCheckInDate);
    if (newCheckInDate > checkOutDate) {
      setCheckOutDate("");
    }
  };

  const handleCheckOutChange = (e) => {
    const newCheckOutDate = e.target.value;
    if (newCheckOutDate >= checkInDate) {
      setCheckOutDate(newCheckOutDate);
    } else {
      alert("Check-out date must be on or after check-in date.");
    }
  };

  const isSubmitButtonVisible = checkInDate !== "" && checkOutDate !== "";

  return (
    <div className={`date-picker ${className}`} style={{ width: "275px" }}>
      <div className="mb-3">
        <label htmlFor="check-in-date" className="form-label">
          <p
            style={{
              backgroundColor: "#5397ef",
              padding: "5px",
              color: "white",
              fontSize: "1rem",
            }}
          >
            Check-in date:
          </p>
        </label>
        <input
          type="date"
          id="check-in-date"
          className="form-control"
          value={checkInDate}
          onChange={handleCheckInChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="check-out-date" className="form-label">
          <p
            style={{
              backgroundColor: "blue",
              padding: "5px",
              color: "white",
              fontSize: "1rem", 
            }}
          >
            Check-out date:
          </p>
        </label>
        <input
          type="date"
          id="check-out-date"
          className="form-control"
          value={checkOutDate}
          onChange={handleCheckOutChange}
          min={checkInDate}
        />
      </div>

      <div className="mt-2">
        <p
          style={{
            backgroundColor: "#5397ef",
            padding: "5px",
            color: "white",
            fontSize: "1rem", 
          }}
        >
          Selected Check-in Date: {checkInDate}
        </p>
        <p
          style={{
            backgroundColor: "blue",
            padding: "5px",
            color: "white",
            fontSize: "1rem", 
          }}
        >
          Selected Check-out Date: {checkOutDate}
        </p>
      </div>

      {isSubmitButtonVisible && (
        <button
          className="btn btn-success mt-3"
          style={{ width: "100%" }}
          type="submit"
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default DatePicker;
