import React from "react";
import "./Contact.scss";
import SmallButton from "../../components/smallbtn/SmallButton";
import contactdata from "../../components/contact/Contactdata";
import Contactbox from "../../components/contact/Contactbox";
import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <div className="row main-contact my-5" data-aos="fade-down" data-aos-duration="1000">
        <div className="col-md-4">
          <div className="row px-2">
            {contactdata.map((ele ,ind)=>{
              return(
                <div key={ind}className="col-md-12 text-center px-5">
                  <Contactbox data={ele}/>
                </div>
              )
            })}
          </div>
        </div>
        <div className="col-md-8 py-5 ">
          <SmallButton data="Get In Contact"/>
          <h2 className="my-4" >Feel free to get in touch<br/> Contact Me.</h2>
          <p>e-learning allows learners to access course materials and complete assignments at their own pace and on their own schedule.</p>

          <form action="https://formspree.io/f/mvgpoppq"  method="POST">
            <div className="row my-2">
              <div className="col-md-6 mb-3">
              <input type="text" className="form-control  " name="username" placeholder="Your Name" autoCapitalize="off" required/>
              </div>
              <div className="col-md-6 mb-3">
              <input type="email" className="form-control" name="email" placeholder="E-mail" autoCapitalize="off" required/>
              </div>
            </div>
            <div className="row my-2">
              <div className="col-md-6 mb-3">
              <input type="number" className="form-control" name="phone" placeholder="Phone Number" autoCapitalize="off" required/>
              </div>
              <div className="col-md-6 mb-3">
              <input type="text" className="form-control" name="subject" placeholder="Subject" autoCapitalize="off" required/>
              </div>
            </div>
              
            <textarea name="message" className="form-control" cols="30" rows="6" placeholder="Type Your Message" autoCapitalize="off" required/>
            <input type="submit" className=" btn btn-primary mt-4 " value="Submit Form"/>
          </form>
        </div>
    </div>
    <div className="row mb-5">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7096.250449392185!2d77.99760163911886!3d27.21521794700805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397477594c91eecd%3A0xdb4778bc4590eb00!2sNagla%20Padi%2C%20Agra%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1719631594662!5m2!1sen!2sin"
        width="100%"
        height="350"
        style={{border:0}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    </>
  );
}

export default Contact;
