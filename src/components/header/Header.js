import React, { useState, useEffect } from "react";

import "./Header.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Header() {
  // const [header, setHeader] = useState(null);
  // const [nav, setNav] = useState(null);
  // const [topOfNav, setTopOfNav] = useState(0);

  // useEffect(() => {
  //   setHeader(document.querySelector('.Header'));
  //   setNav(document.querySelector('.Navbar'));
  //   setTopOfNav(header.offsetTop);

  //   // Cleanup function to remove event listener when component unmounts
  //   return () => {
  //     window.removeEventListener('scroll', fixNav);
  //   };
  // }, []);

  // function fixNav() {
  //   if (window.scrollY >= topOfNav) {
  //     nav.style.paddingTop = header.offsetHeight + 2 + 'px';
  //   } else {
  //     nav.style.paddingTop = 0;
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', fixNav);
  //   // Cleanup function to remove event listener when component unmounts
  //   return () => {
  //     window.removeEventListener('scroll', fixNav);
  //   };
  // }, [topOfNav]);

  return (
    <>
      <div className="container-fluid bg-primary Header fixed-top">
        <div className="row py-2 d-flex">
          {/* Logo */}
          <div className="col logo offset-lg-1">
            <a href="#">
              <img
                width={75}
                src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
                alt="Flipkart"
                title="Flipkart"
              />
            </a>
            <a href="#">
              Explore <span>Plus</span>
              <img
                width={10}
                src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
              />
            </a>
          </div>
          {/* Search */}
          <div className="col col-md-4  search d-flex dropdown bg-white">
            <input
              className="form-control dropdown-toggle"
              type="search"
              placeholder="Search for products, brands and more"
              aria-label="Search"
              id="navbarDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            />
            <i className="fa fa-search mt-2 ml-sm-1 text-primary" />
            <div
              className="dropdown-menu col-12 search-item"
              aria-labelledby="navbarDropdown"
            >
              <h6 className="ml-4">Discover More</h6>
              <div className="dropdown-divider" />
              <a className="dropdown-item py-2" href>
                <i className="fa fa-search text-secondary mr-3" />
                mobiles
              </a>
              <a className="dropdown-item py-2" href>
                <i className="fa fa-search text-secondary mr-3" />
                t-shirts
              </a>
              <a className="dropdown-item py-2" href>
                <i className="fa fa-search text-secondary mr-3" />
                shoes
              </a>
              <a className="dropdown-item py-2" href>
                <i className="fa fa-search text-secondary mr-3" />
                laptop
              </a>
              <a className="dropdown-item py-2" href>
                <i className="fa fa-search text-secondary mr-3" />
                tv
              </a>
              <a className="dropdown-item py-2" href>
                <i className="fa fa-search text-secondary mr-3" />
                sarees
              </a>
            </div>
          </div>
          {/* Login */}
          <div className="col dropdown login">
            <button
              className="btn bg-white text-primary"
              type="button"
              id="loginMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="true"
            >
              Login
            </button>
            {/* <div className="dropdown-menu login-list col-12 aria-labelledby="loginmenubutton">
                <div className="d-flex">
                  <h6 className="ml-md-1">New Customer?</h6>
                  <a href="#" className="ml-auto mr-2" id="signUp">Sign Up</a>
                </div> */}
            <div className="dropdown-divider" />
            <div className="d-flex">
              <i
                className="fa fa-user-circle text-primary mt-2 ml-2"
                aria-hidden="true"
              />
              <a className="dropdown-item" href>
                My Profile
              </a>
            </div>
            <div className="dropdown-divider" />
            <div className="d-flex">
              <i
                className="fa fa-plus text-primary mt-2 ml-2"
                aria-hidden="true"
              />
              <a className="dropdown-item" href>
                Flipkart Plus Zone
              </a>
            </div>
            <div className="dropdown-divider" />
            <div className="d-flex">
              <i
                className="fa fa-book text-primary mt-2 ml-2"
                aria-hidden="true"
              />
              <a className="dropdown-item" href>
                Orders
              </a>
            </div>
            <div className="dropdown-divider" />
            <div className="d-flex">
              <i
                className="fa fa-heart text-primary mt-2 ml-2"
                aria-hidden="true"
              />
              <a className="dropdown-item" href>
                Wishlist
              </a>
            </div>
            <div className="dropdown-divider" />
            <div className="d-flex">
              <i
                className="fa fa-chess-bishop text-primary mt-2 ml-2"
                aria-hidden="true"
              />
              <a className="dropdown-item" href>
                Rewards
              </a>
            </div>
            <div className="dropdown-divider" />
            <div className="d-flex">
              <i
                className="fa fa-gift text-primary mt-2 ml-2"
                aria-hidden="true"
              />
              <a className="dropdown-item" href>
                Gift Cards
              </a>
            </div>
          </div>
        </div>
        {/* More */}
        <div className="col dropdown more">
          <a
            className="btn dropdown-toggle text-white ml-lg-2 ml-sm-0"
            href="#"
            role="button"
            id="moreMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            More
          </a>
          <div
            className="dropdown-menu more-list"
            aria-labelledby="moreMenuLink"
          >
            <div className="d-flex">
              <i
                className="fa fa-bell text-primary ml-md-3 mt-2"
                aria-hidden="true"
              />
              <a className="dropdown-item" href="#">
                Notification Preferences
              </a>
            </div>
            <div className="dropdown-divider" />
            <div className="d-flex">
              <i
                className="fa fa-archive text-primary ml-md-3 mt-2"
                aria-hidden="true"
              />
              <a className="dropdown-item" href="#">
                Sell On Flipkart
              </a>
            </div>
            <div className="dropdown-divider" />
            <div className="d-flex">
              <i
                className="fa fa-question-circle text-primary ml-md-3 mt-2"
                aria-hidden="true"
              />
              <a className="dropdown-item" href="#">
                24x7 Customer Care
              </a>
            </div>
            <div className="dropdown-divider" />
            <div className="d-flex">
              <i
                className="fa fa-chart-line text-primary ml-md-3 mt-2"
                aria-hidden="true"
              />
              <a className="dropdown-item" href="#">
                Advertise
              </a>
            </div>
            <div className="dropdown-divider" />
            <div className="d-flex">
              <i
                className="fa fa-download text-primary ml-md-3 mt-2"
                aria-hidden="true"
              />
              <a className="dropdown-item" href="#">
                Download App
              </a>
            </div>
          </div>
        </div>
        {/* Cart */}
        <div className="col col-md-1 d-flex justify-content-center">
          <i
            className="fa fa-shopping-cart text-white mt-2"
            aria-hidden="true"
          />
          <a href className="btn text-white">
            Cart
          </a>
        </div>
      </div>
    </>
  );
}
