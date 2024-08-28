import React, { useEffect, useState } from "react";
import "../Contact/Contact.css";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    lookingfor:""
  })

  const getInputdata = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  const postData = async (e) => {
    try {
      e.preventDefault()
      const res = await axios.post("https://mediamanserver.onrender.com/api/contacts" ,data)
      if (res.status === 200) {
        toast.success("Your Query Send Suucessfully")
        setData({
          name:"",
          phone:"",
          email:"",
          message:"",
          lookingfor:""
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  },[])
  return (
    <div>
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div class="contact-info">
                <h3 class="title">Let's get in touch</h3>
                <p class="text">
                  If you have question or would like more information on our
                  works, Please complete the form and we'll aim get back to you
                  with in 24 hours.
                </p>

                <div class="info">
                  <div class="information">
                    <i class="bi bi-map-fill"></i>
                    <p>SCO 93,3rd FLOOR SECTOR 7 KARNAL HARYANA</p>
                  </div>
                  <div class="information">
                    <i class="bi bi-envelope"></i>
                    <p>
                      <Link
                        style={{ color: "#555" }}
                        to={"mailto:Pardeep@mediaman.in"}
                      >
                        Pardeep@mediaman.in
                      </Link>
                    </p>
                  </div>
                  <div class="information">
                    <i class="bi bi-phone"></i>
                    <p>97296 06097 , 9053873989</p>
                  </div>
                </div>

                <div class="social-media">
                  <p>Connect with us :</p>
                  <div class="social-icons">
                    <Link
                      target="_blank"
                      to="https://www.facebook.com/mediamanadvertise"
                    >
                      <i class="bi bi-facebook"></i>
                    </Link>
                    <Link target="_blank" to="https://twitter.com/Pk94935427">
                      <i class="bi bi-twitter"></i>
                    </Link>
                    <Link
                      target="_blank"
                      to="https://www.instagram.com/mediamanadvertising?igsh=MXdhbWQzZnMwYnQ5Yw=="
                    >
                      <i class="bi bi-instagram"></i>
                    </Link>
                    <Link
                      target="_blank"
                      to="https://www.linkedin.com/in/pardeep-kumar-4279726a/"
                    >
                      <i class="bi bi-linkedin"></i>
                    </Link>
                    <Link
                      target="_blank"
                      to="https://www.youtube.com/@mediaman569"
                    >
                      <i class="bi bi-youtube"></i>
                    </Link>
                    <Link to="https://api.whatsapp.com/send?phone=919729606097">
                      <i class="bi bi-whatsapp"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form">
                <div class="contact-form">
                  <form action="index.html" autocomplete="off" onSubmit={postData}>
                    <h3 class="title">Contact us</h3>
                    <div class="input-container">
                      <input type="text" name="name" value={data.name} onChange={getInputdata} class="input" placeholder="Enter Name" />
                
                    </div>
                    <div class="input-container">
                      <input type="email" name="email" value={data.email} onChange={getInputdata} class="input" placeholder="Enter Email"/>
    
                    </div>
                    <div class="input-container">
                      <input type="number" name="phone" value={data.phone}  onChange={getInputdata} class="input" placeholder="Enter Phone Number" />
    
                    </div>
                    <div  class="input-container">
                    <select name="lookingfor" id="" class="input" onChange={getInputdata} style={{background:"black"}}>
                                <option value="Please Select" selected disabled>Please Select Looking for</option>
                                <option value="Cinema Advertising">Cinema Advertising</option>
                                <option value="Outdoor Hoading Advertising">Outdoor Hoading Advertising</option>
                                <option value="Airport Advertising">Airport Advertising</option>
                                <option value="Radio Advertisement">Radio Advertisement</option>
                                <option value="Bus Advertising">Bus Advertising</option>
                            </select>
                    </div>
                    <div class="input-container textarea">
                      <textarea name="message" class="input" value={data.message} onChange={getInputdata} placeholder="Message......"></textarea>
            
                    </div>
                    <input type="submit" value="Send" class="btn" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
