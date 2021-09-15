import React from 'react';

export default function Header() {
  return (
    <div className="header__body row space_between">
      <div className="header__logo">
        <i className="fab fa-connectdevelop clickable"></i>
      </div>
      <div className="header__menu">
        <i className="fas fa-folder clickable"></i>
        <i className="fas fa-shopping-cart clickable"></i>
        <i className="fas fa-bars clickable"></i>
      </div>
    </div>
  );
}
