import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Productform from "./Components/Productform";
import Martketplace from "./Components/Martketplace";
import Home from "./Components/Home";
import Resources from "./Components/Resources";
import "./App.css";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/marketplace" element={<Martketplace />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/" element={<Home />} />
          <Route path="/addproducts" element={<Productform />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
