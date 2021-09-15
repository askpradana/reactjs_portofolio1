import React from 'react';
import img1 from '../images/company1.png';
import img2 from '../images/company2.png';
import img3 from '../images/company3.png';
import img4 from '../images/company4.png';

export default function Portofolio() {
  return (
    <div className="center720 p-tb-50">
      <h2>Portofolio</h2>
      <p>
        I've worked with a couple of innovative brand over the years, here's a
        selection of some my favorite works.
      </p>
      <div className="company row space_between">
        <img src={img1} alt="img1" className="company__logo" />
        <img src={img2} alt="img2" className="company__logo" />
        <img src={img3} alt="img3" className="company__logo" />
        <img src={img4} alt="img4" className="company__logo" />
      </div>

      <div className="portofolio__menu clickable row">
        <p className="margin_right-20px text-active">All works</p>
        <p className="margin_right-20px">Branding and logo design</p>
        <p className="margin_right-20px">UI & UX</p>
        <p className="margin_right-20px">Packaging</p>
        <p className="margin_right-20px">Illustration</p>
      </div>

      <div className="portofolio__gallery row space_between flex_wrap">
        <div className="portofolio__gallery-item"></div>
        <div className="portofolio__gallery-item"></div>
        <div className="portofolio__gallery-item"></div>
        <div className="portofolio__gallery-item"></div>
        <div className="portofolio__gallery-item"></div>
        <div className="portofolio__gallery-item"></div>
        <div className="portofolio__gallery-item"></div>
        <div className="portofolio__gallery-item"></div>
        <div className="portofolio__gallery-item"></div>
      </div>
    </div>
  );
}
