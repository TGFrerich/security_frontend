import React from 'react';
import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import SignUpPage from "./pages/signup";
import SignInPage from "./pages/signIn";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Link to={"/sign-up"}>Sign Up</Link>
          <Link to={"/sign-in"}>Sign in</Link>

          <Routes>
              <Route path={"/sign-up"} element={<SignUpPage />}/>
              <Route path={"/sign-in"} element={<SignInPage/>}/>
          </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
