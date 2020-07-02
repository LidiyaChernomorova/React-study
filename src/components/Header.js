import React from "react";
import { render } from "react-dom";
import {Link} from "react-router-dom"

function Header() {

    return (
      <>
      <nav>
        <Link to="/">Home | </Link>
        <Link to="/profile">Profile | </Link>
        <Link to="/services">Services</Link>
      </nav>
      </>
    )
}

export default Header
