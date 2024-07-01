import React from 'react'
import './Blogs.css'
import BlogBox from '../../components/blog/BlogBox'
import SmallButton from '../../components/smallbtn/SmallButton'
import BlogData from '../../components/blog/BlogBoxdata'
import { useEffect } from 'react'


function Blogs() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='row blog'>
      <div className='col-12 text-center mt-5'>
        <SmallButton data="Blogs / News"/>
        <h1 className='mt-4'>Latest From The Blog</h1>
      </div>
    {
      BlogData.map((ele)=>{
        return(
          <div className='col-md-4'>
            <BlogBox data={ele}/>
          </div>
          
        )
      })
    }
    </div>
  )
}

export default Blogs