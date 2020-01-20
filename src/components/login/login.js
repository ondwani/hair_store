import React, { useState } from 'react';
import {Link} from "react-router-dom";

const Login = () => {
    const [logins, setLogins] = useState(null);
    const handleChange = e => {
        const {name, value} = e.target;
        setLogins({...logins, [name]: value})
    };
    console.log(logins);
    return (
        <div >
            <div className= "split right" >
            <div className= "centered" >
                <h2>Login</h2>
                
                <input  
                    className = 'loginput mail'
                    name = "name" 
                    type= "text" 
                    placeholder = "Email"
                    onChange= {handleChange} />

                <input
                    className = 'loginput'
                    name = "password" 
                    type= "password" 
                    placeholder = "Password"
                    onChange = {handleChange} 
                 /><br />

                 <div className = "Remember">
                     <input type="checkbox" />{"   "}Remember me</div>
               <Link to="/"><button className = "btn" type = "submit" >Login</button></Link> 
                <p className = "Signup"><Link to = "/signup">
                 Create an account
                </Link></p>
            </div>         
            </div>
              <div className="split left">           
              </div>
        </div>
    );
};

export default Login;