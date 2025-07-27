import React from 'react'

function navbar() {
  return (
   <div className='container-fluid border-bottom md-1'>
    <nav class="navbar navbar-expand-lg navbar-light ">
  <a class="navbar-brand" href="#">
    <img src='media/images/salonlogo.png' style={{width:"25%"}}/>
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav ">
      <li class="nav-item active">
        <a class="nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#">Partners</a>
      </li>
       <li class="nav-item">
        <a class="nav-link active" href="#">Contacts</a>
      </li>
    </ul>
  </div>
</nav>
   </div>
  )
}

export default navbar
