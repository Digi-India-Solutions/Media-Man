import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [sidetoggle,setSideToggle] = useState(false)

  const handletoggleBtn =()=>{
    setSideToggle(!sidetoggle)
  }

  const logout = ()=>{
    sessionStorage.clear()
    window.location.href="/"
  }
  return (
    <>
      <header>
        <div className="top-head">
          <div className="right">
            <h2>Media Man Admin Panel</h2>
            <div className="bar" onClick={handletoggleBtn}>
              <i class="fa-solid fa-bars"></i>
            </div>
          </div>
          <div className="left">
            <a href="https://mediaman.in" target="_blank">
              <i class="fa-solid fa-globe"></i>
              Go To Website
            </a>
          </div>
        </div>

        <div className={`rightNav ${sidetoggle ? "active" : "" } `  }>
          <ul>
            <li><Link to="/dashboard" onClick={handletoggleBtn}> <i class="fa-solid fa-gauge"></i> Dashboard</Link></li>
            <li><Link to="/all-blog" onClick={handletoggleBtn}> <i class="fa-solid fa-gauge"></i> Blog</Link></li>
            <li><Link to="/all-category" onClick={handletoggleBtn}> <i class="fa-solid fa-tag"></i> Cinema Chain</Link></li>
            {/* <li><Link to="/all-tags" onClick={handletoggleBtn}> <i class="fa-solid fa-tag"></i>Manage Category</Link></li> */}
            {/* <li><Link to="/all-state" onClick={handletoggleBtn}> <i class="fa-solid fa-tag"></i>Manage state</Link></li> */}
            {/* <li><Link to="/all-city" onClick={handletoggleBtn}> <i class="fa-solid fa-tag"></i> Manage City</Link></li> */}
            <li><Link to="/all-products" onClick={handletoggleBtn}> <i class="fa-solid fa-tag"></i> All Cinemas</Link></li>
            <li><Link to="/all-users" onClick={handletoggleBtn}> <i class="fa-solid fa-tag"></i> Cinema Query</Link></li>
            <li><Link to="/all-media" onClick={handletoggleBtn}> <i class="fa-solid fa-tag"></i> Hoading Name</Link></li>
            <li><Link to="/all-banners" onClick={handletoggleBtn}> <i class="fa-solid fa-tag"></i> All Hoadings</Link></li>
            <li><Link to="/all-orders" onClick={handletoggleBtn}> <i class="fa-solid fa-tag"></i> Hoading Query</Link></li>
            <li><Link to="/all-radiosname" onClick={handletoggleBtn}> <i class="fa-solid fa-tag"></i> Radio Name</Link></li>
            <li><Link to="/all-radio" onClick={handletoggleBtn}> <i class="fa-solid fa-tag"></i> All Radioes</Link></li>
            <li><Link to="/all-radios" onClick={handletoggleBtn}> <i class="fa-solid fa-tag"></i> Radio Query </Link></li>
            <li><Link to="/all-query" onClick={handletoggleBtn}> <i class="fa-solid fa-tag"></i> Enquery Query </Link></li>
            
            <button className='logout mb-5' onClick={logout}>Log Out <i class="fa-solid fa-right-from-bracket"></i></button>

          </ul>
        </div>

      </header>
    </>
  )
}

export default Header