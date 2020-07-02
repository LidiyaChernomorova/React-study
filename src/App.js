import React from "react";
import { Switch, Route } from "react-router-dom";

import Modals from "./Modals";
import Modal from "./Modal";
import modalsData from "./db"

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import ServicesList from "./pages/services/ServicesList";
import ServiceDetail from "./pages/services/ServicesDetail";

function App(props) {
  const listOfColors = modalsData.map((elem) => "/" + elem.name); // ["/purple", "/orange", "/green"]
  return (
    <>
      <Header />
      <div id="page">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>

          <Route exact path="/services">
            <ServicesList />
          </Route>

          <Route path="/services/:serviceId">
            <ServiceDetail />
          </Route>

          <Route path="/modals">
            <Modals />
          </Route>

          <Route path={listOfColors} component={Modals} />

        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
