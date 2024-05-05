import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./WelcomeSection.css";

const WelcomeSection = () => {
  return (
    <section className="welcome-section">
      <div className="container margin_60_35 spacing-bottom">
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
            Experience luxury at our 4-star boutique guesthouse in the heart of
            Newlands, Cape Town. Riversong is nestled along the Liesbeek River
            and offers stunning views of Table Mountain.
          </p>
          <p className="gray-paragraph">
            Situated in the Southern Suburbs, Riversong is the perfect choice
            for discerning business travelers or vacationers seeking more than
            just a hotel room.
          </p>
          <p className="gray-paragraph">
            The guesthouse is just a short walk from Newlands Cricket and Rugby
            Grounds, Cavendish Square Mall, Claremont CBD, Vineyard Hotel and
            Conference Centre, S.A. Sports Science Institute and Gym, SA
            Breweries, Dean Street (start of the Two Oceans Marathon), Virgin
            Active Gym, and various restaurants and pubs in trendy Newlands
            Village.
          </p>
        </div>
        <div className="col-md-6">
          <p className="gray-paragraph">
            It's a 10-minute drive from the University of Cape Town, Belmont
            Square Conference Centre, Kirstenbosch Gardens, Kelvin Grove Club,
            Great Westerford, Baxter Theatre, leading hospitals, and schools.
          </p>
          <p className="gray-paragraph">
            A 20-minute drive will take you to the airport, city center, Cape
            Town International Convention Centre, V & A Waterfront, Soccer
            Stadium, golf courses, wine farms, and beautiful beaches.
          </p>
          <p className="gray-paragraph">
            Riversong is less than a 10-minute walk from the Newlands rugby and
            cricket stadiums and the start of the Two Oceans Marathon.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
