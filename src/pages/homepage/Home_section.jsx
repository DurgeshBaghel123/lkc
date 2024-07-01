import React from 'react'
import Button from '../../components/button/Button'
import AutoType from '../../components/AutoType'

function Home_section() {
  return (
    <div className='row home-section pt-5'>
      <div className='col-md-6 pt-5'>
        <AutoType/>
        <h1>Raise the Bar <br/>on Your <span>e-Development</span><br/> Experience.</h1>
        <p>E-learning particularly beneficial for adult learners who may have other commitments such as work or family responsibilities.</p>
        <Button data="Get start"/>
      </div>
      <div className='col-md-6 image pt-2'data-aos="zoom-in">
        <img src='\image\home_main.webp' className=''/>
        <div className='pop-up' data-aos='fade-left' data-aos-delay="1000">
          <img src='\image\6451ec7f19901e54999d5d0c_hero-popup-image-2.png' className='w-75'/>
        </div>
      </div>
    </div>
  )
}

export default Home_section