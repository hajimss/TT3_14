import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <div>
                    <Link to="/" >Home</Link>
                    <Link to="/userinfo">Profile</Link>
                    <Link to="/balance">Balance</Link>
                    {sessionStorage.getItem('accountKey') ? 
                    <div>
                       <Link to="/logout">Logout</Link>
                       <Link to="/balance">Balance</Link>
                    </div>
                    : 
                    <div>
                        <Link to="/login">Login</Link>
                    </div>
                    }
        </div>
    );
}

export default NavBar;