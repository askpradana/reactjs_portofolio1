import React, { Component } from 'react';
import Header from './Header';
import Maincontent from './Maincontent';
import Footer from './Footer';
import Getintouch from './Getintouch';
import Journey from './Journey';
import Portofolio from './Portofolio';

export default class Mainpage extends Component {
  render() {
    return (
      <div className="mainpage">
        <Header />
        <Maincontent />
        <Portofolio />
        <hr className="divider-thin" />
        <Journey />
        <hr className="divider-thin" />
        <Getintouch />
        <hr className="divider-max" />
        <Footer />
      </div>
    );
  }
}
