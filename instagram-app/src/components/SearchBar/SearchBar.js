import React from 'react';
import './SearchBar.css';
import logo from '../../images/text-logo.png';

function SearchBar(props) {
  return(
    <div className="searchbar">
      <div className="left-logos">
        <i className="fab fa-instagram"></i>
        <img className="logo-img" src={logo} alt="instagram" />
      </div>
      <div className="right-icons">
        <i className="far fa-compass"></i>
        <i className="far fa-heart"></i>
        <i className="far fa-user"></i>
      </div>
    </div>
  );
}

export default SearchBar;