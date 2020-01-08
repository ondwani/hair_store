import React, { useState, useEffect } from "react";
import "./toggle.css";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import Data from "../data.json";

const Products = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [data, setData] = useState(null);
  useEffect(() => {
   setData(Data)
  }, [])
 console.log(data)
  const length = [
    "10inch",
    "12inch",
    "14inch",
    "16 inch",
    "18inch",
    "20inch",
    "22inch",
    "24inch",
    "26inch",
    "28inch",
    "30inch"
  ];

  const color = [
    "black",
    "1b/30",
    "1b/99j",
    "1b/burg",
    "2#",
    "4#",
    "99j",
    "613"
  ];

  const density = ["150", "180", "200", "230"];
  const frontal = ["4*4", "13*4", "360"];
  const quality = ["10A", "8A"];
  const type2 = ["bundles", "wig"]

  const toggle = () => setDropdownOpen(prevState => !prevState);
  return (
    <div>
      <h1 className="row">
      <div className="col-md-2">
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>Type</DropdownToggle>
            <DropdownMenu>
              {type2.map(item => (
                <DropdownItem key={item}>{item}</DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className="col-md-2">
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>Length</DropdownToggle>
            <DropdownMenu>
              {length.map(item => (
                <DropdownItem key={item}>{item}</DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>

        <div className="col-md-2">
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>Color</DropdownToggle>
            <DropdownMenu>
              {color.map(item => (
                <DropdownItem key={item}>{item}</DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className="col-md-2">
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>Density</DropdownToggle>
            <DropdownMenu>
              {density.map(item => (
                <DropdownItem key={item}>{item}</DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className="col-md-2">
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>Frontal</DropdownToggle>
            <DropdownMenu>
              {frontal.map(item => (
                <DropdownItem key={item}>{item}</DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className="col-md-2">
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>Quality</DropdownToggle>
            <DropdownMenu>
              {quality.map(item => (
                <DropdownItem key={item}>{item}</DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>

        <div className="container productslist">
	<div className="row">
   {data && data.map(item => {
     const {length, type, color, density, origin, price, quality, frontal, image} = item
     return (
      <div className="col-sm-4">
      <article className="col-item">
        <div className="photo">
        <div className="options-cart">
          <span>

          <button className="btn " title="Add to cart">
            <span >Add to Cart</span>
          </button>
          </span>
          <button className="btn " title="Add to cart">
            <span >Buy Now</span>
          </button>
        </div>
        <a href="#"> <img src={image} className="img-responsive" alt="Product Image" /> </a>
      </div>
      <div className="info">
        <div className="row">
          <div className="price-details col-md-6">
            <p className="details">
              Lorem ipsum dolor sit amet, consectetur..
            </p>
            <h1>{type}</h1>
            <span className="price-new">{`$${price}`}</span>
          </div>
        </div>
      </div>
    </article> 
  </div>
     )
   })}
       
       
      

	</div>
</div>
      </h1>
    </div>
  );
};

export default Products;
