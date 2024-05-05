import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./WelcomeSection.css";

const WelcomeSection = () => {
  return (
    <section className="welcome-section">
      <div className="container margin_20_20spacing-bottom">
        <h1 className="main_title text-danger d-block font-slim">
          <em></em>
          Welcome to OTJ Pride GuestHouse
        </h1>
        <span className="d-block text-secondary increased-font-size font-slim">
          Guest House and Bed & Breakfast
        </span>
        <div className="slim-bar bg-danger"></div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <p className="gray-paragraph">
            Finding an ideal family-friendly guest house in Hazyview does not
            have to be difficult. Welcome to OTJ Pride Guest House, a nice
            option for travelers like you.
          </p>
          <p className="gray-paragraph">
            The rooms offer air conditioning, and getting online is possible, as
            paid WiFi is available, allowing you to rest and refresh with ease.
          </p>
          <p className="gray-paragraph">
            Travelers looking for delis can head to Meat & Coffee Co.
          </p>
        </div>
        <div className="col-md-6">
          <p className="gray-paragraph">
            OTJ Pride Guest House features room service. In addition, as a
            valued OTJ Pride Guest House guest, you can enjoy a pool and an
            on-site restaurant that are available on-site. Guests arriving by
            vehicle have access to free parking.
          </p>
          <p className="gray-paragraph">
            There is no shortage of things to do in the area: explore popular
            historic sites such as Shangana Cultural Village.
          </p>
          <p className="gray-paragraph">
            OTJ Pride Guest House looks forward to welcoming you on your visit
            to Hazyview.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
