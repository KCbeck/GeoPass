import React from "react";

import logo from "../assets/Geopass.jpg";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4">Geo Pass</h1>

    <p className="lead">
      This is the app to give you all the geopolitical news that you need to know. Geo Pass
    </p>
  </div>
);

export default Hero;
