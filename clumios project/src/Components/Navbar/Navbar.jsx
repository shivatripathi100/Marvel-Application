import React from 'react';
import './Navbar.css';
import MarvelImage from './Marvel Logo.jpg'

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={MarvelImage} alt="Marvel Logo" className="logo" />
      </div>
      <div className="navbar-right">
        <input type="text" value={props.searchQuery} onChange={(e)=>{
          props.setSearchQuery(e.target.value)
        }} placeholder="Search for comics..." className="search-box" />
      </div>
    </nav>
  );
};

export default Navbar;
