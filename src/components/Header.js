import React from "react";
import {Link} from "react-router-dom"

function Header() {

    return (
      <>
      <nav>
        <Link to="/">Home | </Link>
        <Link to="/profile">Profile | </Link>
        <Link to="/services">Services | </Link>
        <Link to="/modals">Modals</Link>
      </nav>
      </>
    )
}

export default Header
