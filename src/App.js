import './App.css';
import SignupPage from "./pages/Signup";
import SigninPage from "./pages/Signin";
import { useState } from 'react';

function App() {

  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleButtonClick = () => {
    setIsSignedUp(!isSignedUp);
  }

  return (
    <div className="App">
      <h1>Firebase authentication </h1>
      {
        isSignedUp?(
          <button onClick={handleButtonClick}>Already user! Sign-In here</button>
          ):(
            <button onClick={handleButtonClick}>New user! Sign-Up here</button>
        )
      }

      {isSignedUp ? <SignupPage /> : <SigninPage />}
    </div>
  );
}

export default App;
