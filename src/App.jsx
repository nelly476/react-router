import { useState } from "react";
import "./App.css";
import { Link, Routes, Route } from "react-router-dom";

import About from "./About";
import Home from "./Home";
import Header from "./Header";
import ServiceList from "./services/ServicesList";
import ServiceDetail from "./services/ServiceDetail";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/services" element={<ServiceList />} />
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
      </Routes>
    </div>
  );
}

export default App;
