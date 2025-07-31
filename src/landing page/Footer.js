import React from 'react';

function Footer() {
  return (
    <div className="container mt-4 border-top p-5 ">
      <div className="row ">
        
        <div className="col-4 ">
          <img 
            src="media/images/salonlogo.png" 
            alt="Salon Logo"
            style={{ width: "70%", height: "auto" }} 
            className="mb-3"
          />
          <p className="text-muted ">
            Your complete salon solution. Bookings, staff, and growth simplified.
          </p>


          <div className="d-flex gap-3 ">
            <i className="fa fa-facebook-square" style={{ fontSize: "25px" }} aria-hidden="true"></i>
            <i className="fa fa-twitter-square" style={{ fontSize: "25px" }} aria-hidden="true"></i>
            <i className="fa fa-instagram" style={{ fontSize: "25px" }} aria-hidden="true"></i>
            <i class="fa fa-reddit-square" style={{ fontSize: "25px" }} aria-hidden="true"></i>
          </div>
        </div>


       <div className="col-4 mt-5">
          <h5 className="fw-bold mb-4">About Product</h5>
          <ul className="list-unstyled " style={{lineHeight:"1.5"}}>
            
            <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Home</a></li>
            <li className="mb-2"><a href="#" className="text-muted text-decoration-none">About Us</a></li>
            <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Values</a></li>
            <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Partners</a></li>
          </ul>
        </div>

  <div className="col-4 mt-5">
          <h5 className="fw-bold mb-4">Quick Links</h5>
          <ul className="list-unstyled " style={{lineHeight:"1.5"}}>
            
            <li className="mb-2"><a href="#" className="text-muted text-decoration-none">
Partners</a></li>
            <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Contact Us</a></li>
            <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Salon Trendy</a></li>
            <li className="mb-2"><a href="#" className="text-muted text-decoration-none">
La salon</a></li>
          </ul>
        </div>


<div className="row mt-4 pt-3 border-top">
  <div className="col text-center text-muted small" style={{ lineHeight: '1.5rem' }}>
    © {new Date().getFullYear()} Timeless Trendz. All rights reserved. <br />
    Timeless Trendz is an independent platform for salon and spa management. 
    Unauthorized use, reproduction, or distribution of any part of this website or its content is strictly prohibited. <br />
    This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply. <br />
    By using this website, you agree to be bound by its standard terms and conditions. 
    If you do not agree, you must not use this website.
  </div>
</div>


      </div>
    </div>
  );
}

export default Footer;
