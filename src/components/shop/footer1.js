import React from 'react'
import "../shop/footer1.css";

function Footer1() {
    return (
        <div
        className="top fullscreen  parallax"
        id="top"
        data-img-width="1920"
        data-img-height="1080"
        data-diff="250"
      >
        <div className="content-a">
          <div className="overlay"></div>
          <div className="content-b">
            <div className="dark-line">
              <h1>DEE'S HAIR STORE |</h1>
              <ul className="navbar1">
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Sale</li>
                <li>Customer Service</li>
                <li>Log in</li>
              </ul>
              <div className="container" >
                <div className="row">
                  <div className=" col social" >
                    <ul>
                      <li>
                        <a href="TWITTER_LINK">
                          <i className="fa fa-lg fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="INSTAGRAM_LINK">
                          <i className="fa fa-lg fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="YOUTUBE_LINK">
                          <i className="fa fa-lg fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    )
}

export default Footer1
