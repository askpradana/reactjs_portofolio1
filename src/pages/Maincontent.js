import React from 'react';
import Image from '../images/yoga.png';

export default function Maincontent() {
  return (
    <div className="maincontent">
      <div className="row">
        <div className="maincontent__left column flex_center">
          <div className="maincontent__greeting">
            <h1 className="title">Yo! I'm (name),</h1>
            <h1 className="title">I design stuff.</h1>
            <p>Let's collaborate on your next design project</p>
          </div>
          <div className="maincontent__button">
            <button className="button button_black margin_right-20px">
              Let's work
            </button>
            <button className="button button_transparent-black">
              See my work
            </button>
          </div>
          <div className="maincontent__socialmedia row">
            <i className="fab fa-dribbble"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin-in"></i>
          </div>
        </div>
        <div className="maincontent__right">
          <div className="maincontent__image">
            <img src={Image} alt="maincontent_image" width="400px" />
          </div>
        </div>
      </div>
    </div>
  );
}
