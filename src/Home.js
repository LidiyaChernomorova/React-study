import React from "react";
import { render } from "react-dom";
import "./style.scss";

function Home(props) {
  console.log('props', props);

    return (
      <>
        <h1>Home Page</h1>
        <h6>Updated version after 26 June lecture</h6>
        <p>Nothing to do here</p>
      </>
    )
}

export default Home
