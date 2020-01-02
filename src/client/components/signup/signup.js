import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [signups, setSignups] = useState(null);
    const handleChange = e => {
        const {name, value} = e.target;
        setSignups({...signups, [name]: value})
    };
    return (
        <div>
            <div className= "split right" >
            <div className = "split left1"></div>
            <div className= "centered" >
                <h2>Create a new account</h2>
                <input 
                className = 'loginput'
                name = "name" 
                type= "text" 
                placeholder = "Full Name"
                onChange= {handleChange} />

                <input 
                className = 'loginput'
                name = "name" 
                type= "text" 
                placeholder = "Email"
                onChange = {handleChange} />

                <input 
                className = 'loginput'
                name = "password" 
                type= "password" 
                placeholder = "Password"
                onChange = {handleChange} />

                <input 
                className = 'loginput'
                name = "password" 
                type= "password" 
                placeholder = "Confirm Password"
                onChange = {handleChange} />
                <br />
                <div className = "Terms">
                  <input type = "checkbox" />{"    "}I agree all statements in Terms of Service</div>
                 <Link to = "/login"><button className="btn" type = "submit">Register</button>
           </Link> </div>
        </div>
        </div>
    ) 
};

export default Signup;
