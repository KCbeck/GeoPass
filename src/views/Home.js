import React, { Fragment } from "react";

import Hero from "../components/Hero";
// import Content from "../components/Content";
import WeatherApp from "../WeatherApp";
import PrivateRoute from "../components/PrivateRoute";

const Home = () => (
  <Fragment>
    <Hero />
    <hr />
  
    <PrivateRoute path="/weather" component={WeatherApp} />
  </Fragment>
);

export default Home;
