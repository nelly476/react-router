import { useState } from "react";
import "./App.css";
import { Link, Routes, Route } from "react-router-dom";

import About from "./About";
import Home from "./Home";

function App() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>

      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
