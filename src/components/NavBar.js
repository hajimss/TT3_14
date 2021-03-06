import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar" style={{ background: "#b6dcfe" }}>
      <Link className="navbar-brand" to="/">
        Home
      </Link>
      <Link className="navbar-brand" to="/prices">
        Prices
      </Link>
      <Link className="navbar-brand" to="/userinfo">
        Profile
      </Link>
      {sessionStorage.getItem("accountKey") ? (
        <div>
          <Link className="navbar-brand" to="/balance">
            Balance
          </Link>
          <Link className="navbar-brand" to="/logout">
            Logout
          </Link>
        </div>
      ) : (
        <div>
          <Link className="navbar-brand" to="/login">
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
