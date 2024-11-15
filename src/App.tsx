import React from "react";
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

const App: React.FC = () => {
  return (
    <Router>
      <nav className="fixed top-0 left-0 right-0 flex justify-center space-x-4 bg-gray-800 text-white py-4 shadow-lg z-10">
        <Link to="/" className="px-3 py-2 rounded hover:bg-gray-700">
          Home
        </Link>
        <Link to="/about" className="px-3 py-2 rounded hover:bg-gray-700">
          About
        </Link>
      </nav>
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
