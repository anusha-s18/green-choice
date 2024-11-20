import React, { useState } from "react";
import { Link, useHistory, useNavigate } from "react-router-dom";
import {  signInWithEmailAndPassword  } from 'firebase/auth';
import { auth } from './firebase';

function Login(){ 
  const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/green")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });

    }   
    return (
        <div className="login">
            <Link to="/">
            <img
            className="login__logo"
            src="../images/amazon_black.jpg"
            />
            </Link>
        <div className="login__container">
            <h1>Sign-In</h1>
            <form>
            <h5>Email</h5>
            <input
            type="text"
            aria-required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />

          <h5>Password</h5>
          <input
            type="password"
            aria-required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
            <button
              className="login__signInButton"
              type="submit"
              onClick={onLogin}
              >
              Sign In
            </button>
          

          <p>
            By signing in you agree the Terms and Conditions of the Green Choice. 
            Please see our privacy notice and out cookies policy
          </p>
          <button className="login__registerButton">
            Create your Green Choice account
          </button>
        </form>
      </div>
    </div>
);
}

export default Login;