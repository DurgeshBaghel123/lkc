import React from "react";
import { useLocation } from "react-router-dom";
import BlogData from "../../components/blog/BlogBoxdata";
import "./Singlepage.css";
import { useEffect } from "react";
function Singlepage() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  const location = useLocation();
  //   console.log(location.state);
  let id = location.state.id;

  return BlogData.filter((ele, ind) => {
    if (ind === id) {
      return ele;
    }
  }).map((ele) => {
    return (
      <>
        <div className="row singlepage">
          <div className="col-12  text-center p-3 my-5">
            <div
              className="content w-50 mx-auto"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="topdata my-3">
                <span>{ele.date}</span>
                <small className="btn btn-primary py-0 ms-2">
                  {ele.category}
                </small>
              </div>
              <h1 className="my-5">{ele.title}</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
                nec egestas purus vel purus, lectus. Massa phasellus volutpat,
                faucibus tristique bibendum eros, adipiscing elit.
              </p>
            </div>
            <div
              className="image w-100 mx-auto p-5"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img
                src="\video\640c19d16276f03f0e6dcb23_image here.jpg"
                alt=""
                className="w-100"
              />
            </div>
            <div className="content col-md-8 mx-auto">
              <p>{ele.content}</p>
            </div>
            <div className="blogimage row mx-auto  p-3">
              <div className="col-md-4 mx-auto">
                <img src={ele.image} />
              </div>
              <div className="col-md-7  mx-auto">
                <p>{ele.content}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  });
}

export default Singlepage;
