import React from 'react';
function Team() {
    return ( 
       <div className='container border-top mt-5 p-4 '>
        <div className='row text-center mb-5 '>
            <h1>People</h1>
        </div>
        <div className='col text-center mt-5'>
            <img src='media\images\nithinKamath.jpg' style={{borderRadius:"100%",width:"30%"}}/>
            <h5 className='mt-5'>Nithin Kamath</h5>
            <h6 className='mt-3'>Founder,CEO</h6>
        </div>
       </div>
     );
}

export default Team;