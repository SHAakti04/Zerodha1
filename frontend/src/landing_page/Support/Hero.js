import React from 'react';
function Hero() {
    return (
        <section className='container-fluid mt-5 p-4' id="supportHero">
          <div className='container'>
          <div className='mt-3 mb-3 p-3' id="supportWrapper">
            <h4>Support Portal</h4>
            <a href="">Track Tickets</a>
          </div>
          <div className='row'>
            <div className='col-5'>
              <h6 className='fs-4'>Search for an answer or browse help topics to create a ticket</h6>
              <input placeholder='Eg: how do i activate F&O ,why is my order getting rejected'/>
              <a href="">Track account opening</a>
              <a href="">Track segment activation</a>
              <a href="">Intraday margins</a>
              <a href="">Kite user manual</a>

            </div>
            <div className='col-2'></div>
            <div className='col-5'>
              <h6 className='fs-4'style={{marginLeft:"1rem"}} >Featured</h6>
              <a href="" className='mb-3'>Current Takeovers and Delisting - November 2024</a><br/>
              <a href="">Rights Entitlements listing in November 2024
              </a>
            </div>



          </div>
          </div>
          
        </section>
      );
}

export default Hero;