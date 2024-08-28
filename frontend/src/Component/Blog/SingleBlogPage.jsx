import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import './singleBlogPage.css';

const SingleBlogPage = () => {
  const [blog, setBlog] = useState(null);
  const [allBlog, setAllBlog] = useState([])
  const { _id } = useParams();  // Assuming you are using 'id' as a URL parameter

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("https://mediamanserver.onrender.com/api/blog");
      if (res.status === 200) {
        setAllBlog(res.data.data.reverse());
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`https://mediamanserver.onrender.com/api/blog/${_id}`);
        if (res.status === 200) {
          setBlog(res.data.data);
        }
      } catch (error) {
        console.error("Failed to fetch blog data:", error);
      }
    };
    fetchBlog();
    fetchBlogs();
  }, [_id]);

  if (!blog || !allBlog) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="single-blog">
        <div className="container">
          <div className="row">

            <div className="col-md-9">

              <div className="single-blog-container">
                <div className="single-blog-image">
                  <img src={blog.image} alt={blog.blogName} />
                </div>
                <div className="single-blog-content">
                  <h1 style={{ color: 'darkslategray' }} className='h3 mb-2'>{blog.blogName}</h1>
                  <p className="blog-date">Published on: {new Date(blog.createdAt).toLocaleDateString()}</p>
                  <div className="blog-description" dangerouslySetInnerHTML={{ __html: blog.blogDescription }}></div>
                </div>
              </div>

            </div>

            <div className="col-md-3">
              <div className="bg-white p-2">
                <h5 className="mb-1">Latest Blog</h5>
                <hr className="mb-3 mt-2" style={{ width: '50px', borderTop: '2px solid red' }} />

                  {allBlog && allBlog.length > 0 ? (
                    allBlog.slice(0,10).map((blog, index) => (
                      <Link to={`/singleblog/${blog._id}`} key={index} className="sin row mb-3">
                        <div className="col-4">
                          <img src={blog.image} alt={blog.blogName} style={{ height: '70px' }} className="img-fluid" />
                        </div>
                        <div className="col-8 d-flex flex-column ">
                          <h6 className="mb-1">{blog.blogName}</h6>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p>No more blogs available</p>
                  )}

              </div>



              {/* Follow Us Section */}
              <div className="follow-us mt-4 bg-white p-2" >
                <h5 className="mb-0">Follow us</h5>
                <hr className="mb-3 mt-2" style={{ width: '50px', borderTop: '2px solid red' }} />
                <div className="d-flex justify-content-start">
                  <a href="#" className="me-3">
                    <i className="fab fa-facebook-f fa-2x" style={{ color: '#3b5998' }}></i>
                  </a>
                  <a href="#" className="me-3">
                    <i className="fab fa-twitter fa-2x" style={{ color: '#1da1f2' }}></i>
                  </a>
                  <a href="#" className="me-3">
                    <i className="fab fa-linkedin-in fa-2x" style={{ color: '#0077b5' }}></i>
                  </a>
                  <a href="#" className="me-3">
                    <i className="fab fa-instagram fa-2x" style={{ color: '#e4405f' }}></i>
                  </a>
                  <a href="#" className="me-3">
                    <i className="fab fa-pinterest-p fa-2x" style={{ color: '#bd081c' }}></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube fa-2x" style={{ color: '#ff0000' }}></i>
                  </a>
                </div>
              </div>

            </div>



          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;
