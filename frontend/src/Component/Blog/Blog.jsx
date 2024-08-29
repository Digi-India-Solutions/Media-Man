import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./blog.css";
import MetaTag from "../Meta/MetaTag";

const BlogList = () => {
  const [data, setData] = useState([]);

  const getApiData = async () => {
    try {
      const res = await axios.get("https://api.mediaman.in/api/blog");
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
    <>
    <MetaTag
  title="Blog - Media Man Advertising"
  description="Explore the latest blog posts from Media Man Advertising. Stay updated with our insights, industry news, and updates on advertising trends and strategies."
  keywords="Media Man, blog, advertising insights, industry news, advertising trends"
/>

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
                <button className="filterButton" style={{color:'white'}}>
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
    </>
  );
};

export default BlogList;
