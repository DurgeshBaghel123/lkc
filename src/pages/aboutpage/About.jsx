import React from "react";
import "./About.css";
import About_section from "../../components/About_section";
import Testimonials from "../../components/testimonials/Testimonials";
import SmallButton from "../../components/smallbtn/SmallButton";
import aboutcarddata from "./Aboutcarddata";
import Cources_box from "../../components/cources/Cources_box";
import Button from "../../components/button/Button";
import { useEffect } from "react";


function About() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="row about  ">
      <div className=" row success  m-0 p-0  my-5 ">
        <div className="btn">
          <SmallButton data="Start to success" />
        </div>
        <h2>
          The Leading Global Marketplace
          <br /> for Learning and Instruction
        </h2>
        <div className="row m-0 p-0">
          {aboutcarddata.map((ele) => {
            return (
              <div className="col-md-3 col-12 text-center">
                <Cources_box data={ele} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="row video-section m-0 p-0">
        <div className="col-md-8 col-12 mx-auto text-center">
          <video
            controls
            muted
            poster="\video\640c19d16276f03f0e6dcb23_image here.jpg"
            height={450}
            src="\video\Deewaane Full Video Song 4k 60fps - Selfiee (2023).mp4"
          ></video>
        </div>
      </div>
      <div className=" about-section ">
        <About_section />
      </div>
      <div className="text-center slider-section">
        <Testimonials />
      </div>
      <div className="financial row ">
        
          <div className="col-md-6">
            <img src="\image\64532bc4906235d94a28042d_screen-image.png" alt="" className="w-100" />
          </div>
          <div className="col-md-6">
            <SmallButton data="Financial Aid"/>
            <h4 className="mt-4">Our Scholarship Programs.</h4>
            <p>e-learning allows learners to access course materials and complete assignments at their own pace and on their own schedule. This is particularly beneficial for adult learners.</p>
            <Button data="Fitness Financial Aid"/>
          </div>
      
      </div>
      
      <div className="expert">

      </div>
    </div>
  );
}

export default About;
