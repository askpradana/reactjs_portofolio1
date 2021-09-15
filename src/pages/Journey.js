import React from 'react';
import img from '../images/story.png';

export default function Journey() {
  return (
    <div className="journey center720 row p-tb-50">
      <div className="journey__left flex_center">
        <img
          src={img}
          alt="story_img"
          className="journey__story-img flex_center"
        />
      </div>
      <div className="journey__right column flex_center space_around">
        <div className="journey__right-title">
          <h4>My logo Journey</h4>
          <p>I've been working on this project for a while now.</p>
          <p>
            I'ts basically a diary-style catalogue of my logo design career so
            far...
          </p>
        </div>
        <div className="journey__right-button">
          <button className="button button_black margin_right-20px">
            Pre-order
          </button>
          <button className="button button_transparent-black">
            Go To Store
          </button>
        </div>
      </div>
    </div>
  );
}
