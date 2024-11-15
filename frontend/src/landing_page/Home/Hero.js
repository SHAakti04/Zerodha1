import React from 'react';
function Hero() {
    return ( 
       <div className='container mt-3  p-4'>
          <div className='row text-center'>
            <img src='media/images/homeHero.png' alt='Hero image' className='mb-5' />
            <h1 className='mt-5'>Invest in everything</h1>
            <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <button className='p-2 btn btn-primary' style={{width:'18%',margin:"0 auto"} }>Sign up for free</button>            
          </div>
       </div>
     );
}

export default Hero;