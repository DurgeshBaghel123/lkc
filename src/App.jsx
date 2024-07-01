import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./pages/homepage/Home.jsx";
import About from "./pages/aboutpage/About.jsx";
import Blog from "./pages/blogpage/Blogs.jsx";
import Contact from "./pages/contactpage/Contact.jsx";
import Services from "./pages/servicepage/Services.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/footer/Footer.jsx";
import Singlepage from "./pages/blogsinglepage/Singlepage.jsx";




function App() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);
  
    
  return (
    <>
      <div className="container-fluid dark  ">

        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about"element={<About/>}/>
            <Route path="/blog"element={<Blog/>}/>
            <Route path="/contact"element={<Contact/>}/>
            <Route path="/services"element={<Services/>}/>
            <Route path="/single"element={<Singlepage/>}/>
          </Routes>
          <Footer/>
        </Router>
        
      </div>
    </>
  );
}

export default App;
