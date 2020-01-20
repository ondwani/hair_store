import React from "react";
import Products from "../products/products";
import "../shop/subscribe.css";
import Footer from './footer1'

const Shop = () => {
  return (
    <div>
      <div className="row shopHeader"></div>
      <Products />
      <div className="container subscribe-cont">
        <div className="subscribe-section bg-with-black">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="subscribe-head">
                  <h2>SUBSCRIBE FOR A 10% DISCOUNT</h2>
                  <p>Sign up for free and get the latest tips.</p>
                  <div className="form-section">
                    <form>
                      <input
                        placeholder="Your Email..."
                        name="EMAIL"
                        id="mce-EMAIL"
                        type="email"
                      />
                      <input
                        value="Yes. I want!"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        type="submit"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default Shop;
