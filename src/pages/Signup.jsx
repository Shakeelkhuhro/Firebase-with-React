import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import "./signup.css";
import { app } from "../firebase.js";

const auth = getAuth(app);

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((value) => {
        alert(`User has been successfully signed up with email ${email}`);
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        alert(`Error occurred: ${error.message}`);
      });
  };

  return (
    <div className="signup-page">
      <h1>Signup / Create Your Account</h1>
      <label htmlFor="">Email</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        required
        placeholder="Enter Your Email Here"
      />
      <label htmlFor="">Password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        required
        placeholder="Enter Your Password Here"
      />
      <button onClick={createUser}>Signup</button>
    </div>
  );
};

export default SignupPage;
