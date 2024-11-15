import React from 'react';
function Education() {
    return (  
        <div className='container mt-3  p-4'>
            <div className='row'>
                <div className='col-6'>
                    <img src='media\images\education.svg'/>
                </div>
                <div className='col-6 p-5'>
                    <h2>Free and open market education</h2>
                    <div className='mt-5'>
                        <p className='mt-4'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                        <a href='' className='mt-4'>Varsity<i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    <div className='mt-4'>
                        <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                        <a href='' className='mt-4'>TradingQ&A<i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>

                </div>
            </div>
           
        </div>
    );
}

export default Education;