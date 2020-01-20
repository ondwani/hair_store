import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Cart from '@material-ui/icons/ShoppingCart';
import axios from 'axios';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

const StyledBadge = withStyles(theme => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px'
  }
}))(Badge);

const Navbar = () => {
  const [cartItems, setcart] = useState([]);
  useEffect(() => {
    axios
      .post('/getcart')
      .then(res => setcart([...res.data]))
      .catch(err => console.log(err));
  }, []);

  return (
    <nav
      style={{ borderBottom: '1px #ffff solid' }}
      className='navbar navbar-expand-md navbar-dark bg-dark'
    >
      <div className='container-fluid'>
        <NavLink to='/' className='navbar-brand mainlogo'>
          <h3>DEE'S HAIR STORE </h3>
        </NavLink>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <NavLink to='/' className='nav-link'>
              Home
            </NavLink>
          </li>

          <li className='nav-item'>
            <NavLink to='/Shop' className='nav-link'>
              Shop
            </NavLink>
          </li>

          <li className='nav-item'>
            <NavLink to='/about' className='nav-link'>
              About
            </NavLink>
          </li>

          <li className='nav-item'>
            <NavLink to='/sale' className='nav-link'>
              Sale
            </NavLink>
          </li>

          <li className='nav-item'>
            <NavLink to='/contact' className='nav-link'>
              Customer Service
            </NavLink>
          </li>
        </ul>

        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <NavLink to='/login' className='nav-link'>
              Log In
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/login' className='nav-link'>
              <IconButton aria-label='cart'>
                <StyledBadge
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  badgeContent={cartItems.length > 0 ? cartItems.length : '0'}
                  color='secondary'
                >
                  <Cart color='secondary' />
                </StyledBadge>
              </IconButton>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
