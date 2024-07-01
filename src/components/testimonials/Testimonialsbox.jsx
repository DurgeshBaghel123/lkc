import React from 'react'
import './Testimonialsbox.css'

function Testimonialsbox() {
  return (
    <>
    <div className='Testimonialsbox shadow-sm col-md-8 mx-auto p-5'data-aos="fade-down"data-aos-duration="1000">
      <div className="image">
        <img src="public\image\testimonial\6405b5774b57264807a4fdac_unsplash_jTSf1xnsoCs.png" alt="" className='w-50' />
      </div>
      <div className="title">
        <h4>Shilu ki joe</h4>
        <small>CEO @Xanon</small>
      </div>
      <div className="icon">
      <i className="fa-solid fa-star fa-fade"></i>
      <i className="fa-solid fa-star "></i>
      <i className="fa-solid fa-star fa-fade"></i>
      <i className="fa-solid fa-star "></i>
      <i className="fa-solid fa-star fa-fade"></i>
      </div>
      <div className="text">
        <span>One of the biggest advantages of e-learning platforms is their ability to personalize the learning experience. By using advanced algorithms.</span>

      </div>
    </div>
    </>
  )
}

export default Testimonialsbox