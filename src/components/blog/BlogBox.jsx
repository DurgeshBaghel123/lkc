import React from "react";
import "./BlogBox.css";
import { useNavigate,NavLink } from "react-router-dom";

function BlogBox({ data }) {
    const dataid = data.id
  const navigate = useNavigate();
  function Gotosinglepage() {
    navigate("/single",{state : {id :dataid}});
  }
  return (
    <div className="blogbox shadow p-3 my-5">
      <div className="image w-100">
        <img src={data.image} alt="" className="w-100" />
      </div>
      <div className="content">
        <div className="topdata  d-flex align-item-center justify-content-between my-3">
          <span>{data.date}</span>
          <small>{data.category}</small>
        </div>
        <h5 onClick={Gotosinglepage}>{data.title}</h5>
        <div onClick={Gotosinglepage} className="btn text-white">
          Read More
        </div>
      </div>
    </div>
  );
}

export default BlogBox;
