import React from "react";
import Navbar from "../Component/Landing/Navbar";
import About from "../Component/Landing/About";
import { Footer } from "../Component/Landing/Footer";
import Services from "../Component/Landing/Services";
const LandingPage = () => {
  return (
    <main id="home">
      <Navbar />
      <div className="hero-section container">
        <h1 className="save-money">Save the money </h1>

        <img
          className="hero-image"
          src="/tracking.svg"
          alt="Illustration of miney tracker"
        />
      </div>
      <Services />
      <About />
      <Footer />
    </main>
  );
};

export default LandingPage;
