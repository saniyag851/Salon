import React from 'react'

function excellence() {
  return (
   <div className='container'>
    <div className='row'>
      <div className='col-4 mt-5 p-5 pl-0' style={{ height: '500px',width:"500px" }}>
  <img 
    src='media/images/excellence.jpeg' 
    style={{ width: '100%', height: '100%', objectFit: "cover" }} 
  />
</div>

      <div className="col-6 p-5">
  <h2 className="fw-bold  mt-5 mb-4">Your All-in-One Salon Experience</h2>
  <p className="mb-4" style={{ lineHeight: '1.8rem', textAlign: 'justify' }}>
    <b>Timeless Trendz</b> is more than a booking platform — it's your salon's digital companion.
    Customers can book appointments with ease, staff can manage their schedules seamlessly,
    and salon owners stay in control with real-time insights into team availability and operations.
  </p>

  <ul className="list-unstyled">
    <li className="mb-3 d-flex align-items-start">
      <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
      <span>Hassle-free appointment bookings for clients</span>
    </li>
    <li className="mb-3 d-flex align-items-start">
      <i className="bi bi-person-lock text-primary me-2 mt-1"></i>
      <span>Secure logins for staff to track shifts and tasks</span>
    </li>
    <li className="mb-3 d-flex align-items-start">
      <i className="bi bi-speedometer text-warning me-2 mt-1"></i>
      <span>A powerful dashboard for admins to manage everything in one place</span>
    </li>
  </ul>
</div>

    </div>
   </div>
  )
}

export default excellence
