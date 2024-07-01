import React from 'react'
import './Footer.css'
import Button from '../button/Button.jsx'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className="row footer">
        <div className="col-md-3">
            <div className="logo">
                <img src="public\image\5e808ce7dc544553a7f1b1e4_Black (1).svg" alt=""className='w-100' />
            </div>
            <p>There are many variations of passag of Lor Ipsum available but the major have suffered alteration</p>
            <div className="icon">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-skype"></i>
            </div>
            <Button data="More Webflow Template"/>
        </div>
        <div className="col-md-6 ">
            <div className="row">
                <div className="col-md-3 mx-auto">
                    <h4>Pages</h4>
                    <ul className="f-menu">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact Us</NavLink></li>
                        <li><NavLink to="/blog">Blog</NavLink></li>
                        <li><NavLink to="/services">Services</NavLink></li>
                    </ul>
                </div>
                <div className="col-md-3 mx-auto">
                    <h4>Categories</h4>
                    <ul className='f-menu'>
                        <li>Arduino Uno</li>
                        <li>Razaberry Pi</li>
                        <li>Microcontrol</li>
                        <li>Camera</li>
                        <li>Technical</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <h4>Subscribe to our Newsletter</h4>

        </div>
    </div>
    <div className="row text-center bg-dark text-light">
        <span className='tracking-widest'>Copyright © Hopedu|Designed by <b>Brandbes</b> - Powered by <b>Webflow</b></span>
    </div>
    </>

  )
}

export default Footer