import React from "react";
import Home from "./components/Home";
import Signup from "./components/Signup";
import About from "./components/About";
import Signin from "./components/Signin";
import { Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}>
          {" "}
        </Route>
        <Route path="/About" element={<About />}>
          {" "}
        </Route>
        <Route path="/signup" element={<Signup />}>
          {" "}
        </Route>
        <Route path="/signin" element={<Signin />}>
          {" "}
        </Route>
        <Route path="/profile" element={<Profile />}>
          {" "}
        </Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
