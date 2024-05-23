import React, { useState } from 'react';

const First = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
    

  return (
    <>
      <div className="front-page">
        <div className="navbar">
          <div className="title">Agency</div>
          <div className={`nav-elements ${menuOpen ? 'active' : ''}`}>
            <ul>
            <li><a href="#home">HOME</a></li>
              <li><a href="#about" >ABOUT US</a></li>
              <li><a href="#team" >TEAM</a></li>
              <li><a href="#services" >SERVICES</a></li>
              <li><a href="#process" >PROCESS</a></li>
              <li><a href="#clients" >CLIENTS</a></li>
              <li><a href="#work" >WORK</a></li>
                <li className="search-icon">
                  <img src="image/search_icon.png" alt="search_icon" />
                </li>
                <li className="facebook-logo">
                  <img src="image/facebook_logo.png" alt="facebook_logo" />
                </li>
              </ul>
          </div>
          <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={handleMenuToggle}>
            <div className="line" />
            <div className="line" />
            <div className="line" />
          </div>
        </div>
          <div className="page-1">
            <div className="title_main">
              <div className="sub-title_main">
                <h2 className="think">THINK</h2>
                <h2>OUTSIDE</h2>
                <h2 className="box">of the box</h2>
                <button><a href="" style={{color:"black"}}>READ MORE</a></button>
              </div>
            </div>
            <img src="image/Model Image.png" alt="" />
          </div>
      </div>
      </>
      
    )
}

export default First    