import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import "./signup.css";

const auth = getAuth(app);

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signinUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        alert(`Successfuly Signed In with ${email}`);
        setEmail("");
        setPassword("");
      })
      .catch((err) => alert("An error occured in email or password"));
  };

  return (
    <div className="signin-page">
      <h1>Signin with your Email and password</h1>
      <label htmlFor="">Enter Your Email</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder="Enter Your Email Here"
      />
      <label htmlFor="">Enter Your Password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Enter Your Password Here"
      />
      <button onClick={signinUser}>Sign me in</button>
    </div>
  );
};

export default SigninPage;
