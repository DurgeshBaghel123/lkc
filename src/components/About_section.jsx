import React from 'react'
import { NavLink } from 'react-router-dom'
import './About_section.css'
import Button from './button/Button'
import SmallButton from './smallbtn/SmallButton'

function About_section() {
  return (
    <div className='about_section row '>
        <div className='col-12 col-md-6 order-md-1 order-2 content'>
            <NavLink to="/about">
                <SmallButton data="About Us"/>
            </NavLink>
            <h2>About our next level <br/>e-Course.</h2>
            <p data-aos="fade-up">e-learning allows learners to access course materials and complete assignments at their own pace and on their own schedule. This is particularly beneficial for adult learners.</p>
            <div className='arrowimage'>
                <img src='\image\slider\about-arrowshape.svg'/>
            </div>
            <div className='about-content-block py-3 px-4 '>
                <div className='title d-flex'>
                    <span><i className="fa-solid fa-user-large"></i></span>
                    <h4>Creat Account</h4>
                </div>
                <span className='para'>e-learning eliminates the need for classroom settings, which can be expensive to main tain.</span>
            </div>
            
            <div className='about-content-block py-3 px-4 '>
                
                <div className='title d-flex'>
                    <span><i className="fa-solid fa-user-graduate"></i></span>
                    <h4>Get Certification</h4>
                </div>
                <span className='para' >e-learning eliminates the need for classroom settings, which can be expensive to main tain.</span>
            </div>
            <Button data="get start"/>
        </div>
        <div className='col-12 col-md-6 order-md-1 order-1 bg-image mb-5'>
            <img src="\image\6451ef29fdafeb1d7d1c6995_1.webp" alt="" className='w-100' />
        </div>
    </div>
  )
}

export default About_section