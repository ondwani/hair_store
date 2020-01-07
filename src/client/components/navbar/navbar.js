import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{borderBottom:"1px #ffff solid"}} className = "navbar navbar-expand-md navbar-dark bg-dark">
         <div className = "container-fluid">
             <a className = "navbar-brand"><h3>DEE'S HAIR STORE </h3></a>
             <ul className = "navbar-nav mr-auto">              
                 <li className = "nav-item" >
                 <NavLink to = "/" className = "nav-link" >
                    Home
                 </NavLink>
                 </li>

                 <li className = "nav-item" >
                 <NavLink to = "/Shop" className = "nav-link" >
                    Shop
                 </NavLink>
                 </li>

                 <li className = "nav-item" >
                 <NavLink to = "/about" className = "nav-link" >
                    About
                 </NavLink>
                 </li>

                 <li className = "nav-item" >
                 <NavLink to = "/sale" className = "nav-link" >
                     Sale
                 </NavLink>
                 </li>

                 <li className = "nav-item" >
                 <NavLink to = "/contact" className = "nav-link" >
                    Customer Service
                 </NavLink>
                 </li>

                 <li className = "nav-item" >
                 <NavLink to = "/login" className = "nav-link" >
                     Log In
                 </NavLink>
                 </li>
            </ul>
         </div>   
        </nav>
    );
};

export default Navbar;
