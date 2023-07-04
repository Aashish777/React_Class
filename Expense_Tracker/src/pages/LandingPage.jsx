import React from "react";
import Navbar from "../Component/Landing/Navbar";
import About from "../Component/Landing/About";
import { Footer } from "../Component/Landing/Footer";
const LandingPage = () => {
  return (
    <main>
      <Navbar />
      <div className="flex container">
        <h1 className="save-money">Save the money to enjoy Thailand trip </h1>

        <img
          className="hero-image"
          src="/tracking.svg"
          alt="Illustration of miney tracker"
        />
      </div>
      <div className="flex container">
        <div>
          <h2>Services</h2>
          <div className="flex services ">
            <div>
              <img src="/tracking.svg" alt="" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and
              </p>
            </div>
            <div>
              <img src="/tracking.svg" alt="" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and
              </p>
            </div>
            <div>
              <img className="hero-image2" src="/tracking.svg" alt="" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and
              </p>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Footer />
    </main>
  );
};

export default LandingPage;
