import React from 'react';
import { Link } from 'react-router-dom';

export default ( { currentUser, logout } ) => {
    if (currentUser) {
        const name = currentUser.alias ? alias : full_name
    };
    const navBar = currentUser ? (
        
        <div className="top-nav-home">
            <h3 className="bold">Welcome</h3>
            <p> { name }</p>
            <button onClick= { logout }> Sign Out </button>
        </div>
    ) : (
        <div className="top-nav-home">
            <Link to="/signup"> Sign Up </Link>
            <Link to="/login"> Log In </Link>
        </div>
    );

    return (
        <div className="top-nav flex">
            { navBar }
        </div>
    )
}