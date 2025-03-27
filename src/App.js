import React, { useEffect, useState } from "react";
// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router components
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import VideoCarousel from "./components/VideoCarousel";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import "./App.css";
import { fetchMessage } from "./api/api";

// Define a Home component (or use an existing one)
const Home = () => {
  return (
    <div>
      <VideoCarousel />
    </div>
  );
};

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchMessage().then((data) => setMessage(data.message));
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          {/* Optional: Add a Contact component if you plan to include it */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        {/* DJANGO RESPONSES */}
        <div className="container text-center mt-4">
          <h5>Backend Response: {message}</h5>
        </div>
        <Footer /> {/* Footer can stay outside Routes if it’s on every page */}
      </div>
    </Router>
  );
}

export default App;