import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./header.jsx";
import Listing from "./coffelisting.jsx";
import Listing1 from "./Available.jsx";
import './index.css';

function App() {
  return (
    <Router>
      <Header />

      <div className="cont1">
        <h2>Our Collection</h2>
        <p>
          Introducing our Coffee Collection, a selection of unique coffee types from different roast types and origins,
          expertly roasted in small batches and shipped fresh weekly.
        </p>
        <br />

        {/* Navigation Links */}
        <div className="tag1">
          <p className="tag"><Link to="/coffelisting">All Products</Link></p>
          <p className="inline"><Link to="/available">Available Now</Link></p>
        </div>

        {/* Route-Specific Rendering */}
        <Routes>
          <Route path="/" element={<Listing />} />
          <Route path="/coffelisting" element={<Listing />} />
          <Route path="/available" element={<Listing1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
