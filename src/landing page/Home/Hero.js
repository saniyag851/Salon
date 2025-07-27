import React from 'react'

function Hero() {
  return (
<div className='container-fluid pb-0 '>
    <div className='row md-1'>
        <div className='col-6'>
            <div className='row p-5 pb-0 '>
                <h1 className='fs-1 '><b>Timeless Trendz</b> <br/>Where Technology Meets Timeless Beauty </h1>
                <p style={{lineHeight:"2rem",textAlign:"justify"}}>Timeless Trendz empowers salons and spas with smart, scalable software designed for the modern beauty industry. Our data-driven platform streamlines operations, boosts profitability, and enhances every client experience. Trusted by professionals aiming to grow with confidence and efficiency.</p>                
            </div>
            <div className='row p-5 pt-0'>
                <div className='col-3 mt-2'>
                    <input className="btn" style={{width:"9rem",alignItems:"center",backgroundColor:"rgba(106, 57, 151, 0.6)"}} type="button" value="Get Started"></input>  
                </div>
                <div className='col-3 pr-0 pt-0 p-5'>
                    <img src='media/images/mobile.png' style={{width:"155%", borderRadius:"100%"}}/>
                </div>
                <div className='col-6 p-2 '><p><b>Book A Free Demo</b></p></div>
            </div>
          
            
        </div>
       <div className='col-6 p-5' style={{ height: '500px' }}>
  <img 
    src='media/images/salonpicture.png' 
    style={{ width: '100%', height: '100%', objectFit: "cover" }} 
  />
</div>
    </div>
</div>
  )
}

export default Hero
       