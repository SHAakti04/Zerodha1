import React from 'react';
function Hero() {
    return ( 
        <div className='container mt-5 p-4'>  
            <div className='row text-center p-3'>
                <h1>Technology</h1>
                <h4 className='p-3 text-muted'>  Sleek, modern, and intuitive trading platforms</h4>
                 <p className='fs-5 text-muted'>Check out our <a href='#' style={{textDecoration:"none"}}>investment offerings<i class="fa-solid fa-arrow-right-long"></i> </a></p>
            </div>
            <hr className='text-muted'/>
        </div>
     );
}

export default Hero;