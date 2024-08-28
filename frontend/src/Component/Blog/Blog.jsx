import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./blog.css";

const BlogList = () => {
  const [data, setData] = useState([]);

  const getApiData = async () => {
    try {
      const res = await axios.get("https://mediamanserver.onrender.com/api/blog");
      if (res.status === 200) {
        setData(res.data.data.reverse());
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);
  
  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  },[])

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="container mt-5 mb-3">
      <h3 className="blog-heading">Blog</h3>
      <hr />
      <div className="row">
        {data.map((item, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="blog">
              <div className="blog-image">
                <img
                  src={item.image}
                  alt="Blog Image"
                  className="img-fluid"
                />
                <div className="date">{formatDate(item.createdAt)}</div>
              </div>
              <div className="blog-content">
                <h2>Blog Post {index + 1}</h2>
                <p>{item.blogName}</p>
                <Link to={`/singleblog/${item._id}`}>
                <button className="cssbuttons-io">
                    <span>
                      Read More &nbsp;
                      <i className="bi bi-arrow-right-circle"></i>
                    </span>
                </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
