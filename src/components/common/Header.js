import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';



const Header = () => {

    const activeStyle = { color: 'red' };

    return (
        <div>
            <NavLink to="/" activeStyle={activeStyle} exact>Home</NavLink>{ "|" }
            <NavLink to="/about" activeStyle={activeStyle} >About</NavLink>
        </div>
    );
}

export default Header;

