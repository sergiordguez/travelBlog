import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TravelDetail from "./pages/TravelDetail";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PhotoSlider from "./components/PhotoSlider";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<PhotoSlider />} />
        <Route path="/travel/:id" element={<TravelDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
