import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PhotoSlider from "../components/PhotoSlider";
import About from "../pages/About";
import TravelDetail from "../pages/TravelDetail";
export function MyRoutes() {
  return (
      <Routes>
        <Route path="/" element={<PhotoSlider />} />
        <Route path="/travel/:id" element={<TravelDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    
  );
}
