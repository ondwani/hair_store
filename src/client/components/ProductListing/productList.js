import React, { useState, useEffect } from "react";
import axios from "axios";
import "./product.css";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import Data from "../data.json";

function ProductList({ match }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [dropdownOpen3, setDropdownOpen3] = useState(false);
  const [cart, setCart] =useState();

  const [product, setProduct] = useState(null);
  const { id } = match.params;
  useEffect(() => {
    setProduct(Data.filter(item => item.type == id));
  }, []);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const toggle1 = () => setDropdownOpen1(prevState => !prevState);
  const toggle2 = () => setDropdownOpen2(prevState => !prevState);
  const toggle3 = () => setDropdownOpen3(prevState => !prevState);

const addcart =async()=>{

const cartsubmit=await axios.post("/api/addcart", cart )
console.log(cartsubmit.data)
}
  console.log(cart);
  return (
    <div>
      {product &&
        product.map((items, i) => {
          const {
            length,
            type,
            color,
            density,
            origin,
            price,
            quality,
            frontal,
            image
          } = items;
          return (
            <section className="product-section" key={i}>
              <div className="container">
                <div className="back-link">
                  <a href="./category.html"> &lt;&lt; Back to Category</a>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="product-pic-zoom">
                      <img className="product-big-img" src={image} alt="" />
                    </div>
                    <div
                      className="product-thumbs"
                      tabIndex="1"
                      style={{ overflow: "hidden", outline: "none" }}
                    >
                      <div className="product-thumbs-track">
                        <div
                          className="pt active"
                          data-imgbigurl="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        >
                          <img
                            src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                          />
                        </div>
                        <div
                          className="pt"
                          data-imgbigurl="img/single-product/2.jpg"
                        >
                          <img src="img/single-product/thumb-2.jpg" alt="" />
                        </div>
                        <div
                          className="pt"
                          data-imgbigurl="img/single-product/3.jpg"
                        >
                          <img src="img/single-product/thumb-3.jpg" alt="" />
                        </div>
                        <div
                          className="pt"
                          data-imgbigurl="img/single-product/4.jpg"
                        >
                          <img src="img/single-product/thumb-4.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 product-details">
                    <h2 className="p-title">{type}</h2>
                    <h3 className="p-price">{`$${price}`}</h3>
                    <h4 className="p-stock">
                      Available: <span>In Stock</span>
                    </h4>
                    <div className="p-rating">
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o fa-fade" />
                    </div>
                    <div className="p-review">
                      <a href="">3 reviews</a>|<a href="">Add your review</a>
                    </div>
                    <div className="fw-size-choose">
                      <p>Length</p>
                      {length.map((data, i) => (
                        <div className="sc-item" onClick={(e)=>{e.preventDefault();setCart({...cart, length:data})}}>
                          <input type="radio" name="sc" id="xs-size" />
                          <label htmlFor="xs-size">
                            {data.replace("inch", "")}
                          </label>
                        </div>
                      ))}
                    </div>
                    <div className="row">
                      <div className="col-md-2">
                        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                          <DropdownToggle caret>Color</DropdownToggle>
                          <DropdownMenu>
                            {color.map(item => (
                              <DropdownItem key={item} onClick={()=>{setCart({...cart, color:item, type:type})}}>{item}</DropdownItem>
                            ))}
                          </DropdownMenu>
                        </Dropdown>
                      </div>
                      <div className="col-md-2">
                        <Dropdown isOpen={dropdownOpen1} toggle={toggle1}>
                          <DropdownToggle caret>Quality</DropdownToggle>
                          <DropdownMenu>
                            {quality.map(item => (
                              <DropdownItem onClick={()=>{setCart({...cart, quality:item})}} key={item}>{item}</DropdownItem>
                            ))}
                          </DropdownMenu>
                        </Dropdown>
                      </div>

                      <div className="col-md-2">
                        <Dropdown isOpen={dropdownOpen2} toggle={toggle2}>
                          <DropdownToggle caret>Frontal</DropdownToggle>
                          <DropdownMenu>
                            {frontal.map(item => (
                              <DropdownItem key={item} onClick={()=>{setCart({...cart, frontal:item})}}>{item}</DropdownItem>
                            ))}
                          </DropdownMenu>
                        </Dropdown>
                      </div>
                      <div className="col-md-2">
                        <Dropdown isOpen={dropdownOpen3} toggle={toggle3}>
                          <DropdownToggle caret>Density</DropdownToggle>
                          <DropdownMenu>
                            {density.map(item => (
                              <DropdownItem key={item} onClick={()=>{setCart({...cart, density:item})}}>{item}</DropdownItem>
                            ))}
                          </DropdownMenu>
                        </Dropdown>
                      </div>
                    </div>
                    <br/>
                    <div className="quantity">
                      <p>Quantity</p>
                      <div className="pro-qty">
                        <input type="text" value="1" />
                      </div>
                    </div>
                    <span>
                      <a href="#" className="site-btn">
                        SHOP NOW
                      </a>
                    </span>
                    <a href="#" className="site-btn" onClick={addcart}>
                      ADD TO CART
                    </a>
                    <div id="accordion" className="accordion-area">
                      <div className="panel">
                        <div className="panel-header" id="headingOne">
                          <button
                            className="panel-link active"
                            data-toggle="collapse"
                            data-target="#collapse1"
                            aria-expanded="true"
                            aria-controls="collapse1"
                          >
                            information
                          </button>
                        </div>
                        <div
                          id="collapse1"
                          className="collapse show"
                          aria-labelledby="headingOne"
                          data-parent="#accordion"
                        >
                          <div className="panel-body">
                            <p>
                              We allow you to customize your wigs al by yourself so that you get exactly what you want and how you want it. You can pick the length, color, density, frontal and quality of hair you desire and have it made to those specifications. 
                            </p>
                            <p>
                              Approx length 66cm/26" (Based on a UK size 8
                              sample)
                            </p>
                            <p>Mixed fibres</p>
                           
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
    </div>
  );
}

export default ProductList;
