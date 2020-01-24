import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './products.css';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import Data from '../data.json';

const Products = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [dropdownOpen3, setDropdownOpen3] = useState(false);
  const [dropdownOpen4, setDropdownOpen4] = useState(false);
  const [dropdownOpen5, setDropdownOpen5] = useState(false);
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(Data);
  }, []);

  // const productDetail = ()=>{

  // }
  const length = [
    '10inch',
    '12inch',
    '14inch',
    '16 inch',
    '18inch',
    '20inch',
    '22inch',
    '24inch',
    '26inch',
    '28inch',
    '30inch'
  ];

  const color = [
    'black',
    '1b/30',
    '1b/99j',
    '1b/burg',
    '2#',
    '4#',
    '99j',
    '613'
  ];

  const density = ['150', '180', '200', '230'];
  const frontal = ['4*4', '13*4', '360'];
  const quality = ['10A', '8A'];
  const type2 = ['bundles', 'wig'];
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const toggle1 = () => setDropdownOpen1(prevState => !prevState);
  const toggle2 = () => setDropdownOpen2(prevState => !prevState);
  const toggle3 = () => setDropdownOpen3(prevState => !prevState);
  const toggle4 = () => setDropdownOpen4(prevState => !prevState);
  const toggle5 = () => setDropdownOpen5(prevState => !prevState);
  return (
    <div>
      <h1 className='row'>
        <div className='col-md-2'>
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>Type</DropdownToggle>
            <DropdownMenu>
              {type2.map(item => (
                <DropdownItem key={item}>{item}</DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className='col-md-2'>
          <Dropdown isOpen={dropdownOpen1} toggle={toggle1}>
            <DropdownToggle caret>Length</DropdownToggle>
            <DropdownMenu>
              {length.map(item => (
                <DropdownItem key={item}>{item}</DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>

        <div className='col-md-2'>
          <Dropdown isOpen={dropdownOpen2} toggle={toggle2}>
            <DropdownToggle caret>Color</DropdownToggle>
            <DropdownMenu>
              {color.map(item => (
                <DropdownItem key={item}>{item}</DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className='col-md-2'>
          <Dropdown isOpen={dropdownOpen3} toggle={toggle3}>
            <DropdownToggle caret>Density</DropdownToggle>
            <DropdownMenu>
              {density.map(item => (
                <DropdownItem key={item}>{item}</DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className='col-md-2'>
          <Dropdown isOpen={dropdownOpen4} toggle={toggle4}>
            <DropdownToggle caret>Frontal</DropdownToggle>
            <DropdownMenu>
              {frontal.map(item => (
                <DropdownItem key={item}>{item}</DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className='col-md-2'>
          <Dropdown isOpen={dropdownOpen5} toggle={toggle5}>
            <DropdownToggle caret>Quality</DropdownToggle>
            <DropdownMenu>
              {quality.map(item => (
                <DropdownItem key={item}>{item}</DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>

        <div className='container productslist'>
          <div className='row'>
            {data &&
              data.map((item, i) => {
                const { type, price, image } = item;
                return (
                  <div className='col-sm-4' key={i}>
                    <article className='col-item'>
                      <div className='photo'>
                        <div className='options-cart'>
                          <Link key={i} to={`/shop/${type}`}>
                            <button className='btn '>Buy Now</button>
                          </Link>
                        </div>
                        <Link key={i} to={`/shop/${type}`}>
                          <img
                            src={image}
                            className='img-responsive'
                            alt='Product preview'
                          />
                        </Link>
                      </div>
                      <div className='info'>
                        <div className='row'>
                          <div className='price-details col-md-12'>
                            {/* <p className="details">
              Lorem ipsum dolor sit amet, consectetur..
            </p> */}
                            <h1>{type}</h1>
                            <span className='price-new'>{`$${price}`}</span>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                );
              })}
          </div>
        </div>
      </h1>
    </div>
  );
};

export default Products;
