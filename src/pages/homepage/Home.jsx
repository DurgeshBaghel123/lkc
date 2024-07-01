import React from "react";
import "./Home.css";
import Button from "../../components/button/Button";
import AutoType from "../../components/AutoType"
import Logoslider from "../../components/Logoslider";
import About_section from "../../components/About_section";
import Cources_category from "../../components/cources/Cources_category";
import Testimonials from "../../components/testimonials/Testimonials.jsx"
import Contact from "../../components/contact/Contact.jsx";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    < div className="bodyimg">
      <div className="row home-section py-5 px-2">
        <div className="col-md-6 pt-5">
          <AutoType />
          <h1 data-aos="fade-up" data-aos-delay="2000">
            Raise the Bar <br />
            on Your <span>e-Learning</span>
            <br /> Experience.
          </h1>
          <p>
            E-learning particularly beneficial for adult learners who may have
            other commitments such as work or family responsibilities.
          </p>
          <Button data="Get start" />
        </div>
        <div className="col-md-6 image pt-2" data-aos="zoom-in">
          <img src="\image\home_main.webp" className=" " />
          <div className="pop-up" data-aos="fade-left" data-aos-delay="1000">
            <img
              src="\image\6451ec7f19901e54999d5d0c_hero-popup-image-2.png"
              className="w-75"
            />
          </div>
        </div>
      </div>
      <div className="row py-5 slider_section">
        <Logoslider/>
      </div>
      <div className="row  py-5 about_section">
        <About_section/>
      </div>
      <div className="row cources_section  my-5 text-center">
        <Cources_category/>
      </div>
      <div className="row textimonila_section  my-5 text-center">
        <Testimonials/>
      </div>
      <div className="row contact_section text-center py-5 mb-5">
        <Contact/>
       
      </div>
    </div>
  );
}

export default Home;
