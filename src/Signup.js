import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory, useNavigate } from "react-router-dom";
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from './firebase';
import { Button } from "@mui/material";

function Signup() {    
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault()

        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                navigate("/green")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ..
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
            <h1>Sign-Up</h1>
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
          {/* <Link to ="/">
            <button
              className="login__signInButton"
              type="submit"
              >
              Sign Up
            </button>
          </Link> */}
          <Button   
            type="submit"
            onClick={onSubmit}
            > Sign Up </Button>

          <p>
            By signing up you agree the Terms and Conditions of the Green Choice. 
            Please see our privacy notice and out cookies policy
          </p>
          {/* <button className="login__registerButton">
            Create your Green Choice account
          </button> */}
        </form>
      </div>
    </div>
);
}

export default Signup;
