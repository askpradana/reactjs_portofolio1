import React from 'react';

export default function Footer() {
  return (
    <div className="footer center720 row space_between">
      <div className="footer__left column flex_center">
        <div className="footer__left-img"></div>
        <div className="footer__left-text row">
          <i className="fab fab_right-only fa-dribbble"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-linkedin-in"></i>
        </div>
        <div>
          <p className="footer__text-xs">
            2021 pradana. All right reserved(perhaps)
          </p>
        </div>
      </div>

      <div className="column flex_center">
        <p className="footer__text-grey line-height0">About me</p>
        <p className="footer__text-grey line-height0">Contact</p>
        <p className="footer__text-grey line-height0">Testimonials</p>
        <p className="footer__text-grey line-height0">References</p>
      </div>

      <div className=" column flex_center">
        <p className="footer__text-grey line-height0">Portofolio</p>
        <p className="footer__text-grey line-height0">Store</p>
        <p className="footer__text-grey line-height0">Freebies</p>
        <p className="footer__text-grey line-height0">Books</p>
      </div>

      <div className="column flex_center">
        <p className="footer__text-black line-height0">Get in touch</p>
        <p className="footer__text-black line-height0">+62 - 0123456789</p>
        <p className="footer__text-black line-height0">mail@mail.com</p>
      </div>
    </div>
  );
}
