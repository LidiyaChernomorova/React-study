import React from "react";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import Settings from "./Settings";
import Info from "./Info";

function Profile() {
  //CAN'T USE
  const { path, url } = useRouteMatch();
  console.log(useRouteMatch());
  
  // second way to solve problem:
  // const url = "/profile";
  // const path = "/profile";

  //or make my own hook:
  // function useMyRouteMatch(){
  //   const wholeUrl = window.location.href;
  //   const url = wholeUrl.substring(wholeUrl.lastIndexOf('/'), wholeUrl.length)

  //   return {path: url, url: url};
  // }
  // const url = useMyRouteMatch();
  // const path = useMyRouteMatch();

  return (
    <>
      <h1>Profile Page</h1>
      <Link to={`${url}/info`}>Profile Info | </Link>
      <Link to={`${url}/settings`}>Profile Settings</Link>

      <Switch>
        <Route path={`${path}/info`}>
          <Info />
        </Route>
        <Route path={`${path}/settings`}>
          <Settings />
        </Route>
      </Switch>
    </>
  );
}

export default Profile;
