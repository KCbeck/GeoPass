import React, { Fragment } from "react";

import Hero from "../components/Hero";
// import Content from "../components/Content";
import dashboard from '../components/dashboard';
import PrivateRoute from "../components/PrivateRoute";

const Home = () => (
  <Fragment>
    <Hero />
    <hr />
  
    <PrivateRoute path="/dashboard" component={dashboard} />
  </Fragment>
);

export default Home;
