import React from 'react';
function Pricing() {
    return ( 
        <div className='container mt-3 p-4'>
            <div className='row'>
                <div className='col-4 p-3'>
                    <h1 className='mb-5 '>Unbeatable pricing</h1>
                    <p >We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' style={{textDecoration:"none"}}>See Pricing <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='row'>
                        <div className='col-6 border'>
                            <h1 className='p-3'>₹0</h1>
                            <p className='p-3'>Free equity delivery<br/>
                            and direct mutual funds</p>
                        </div>
                        <div className='col-6 border'>
                            <h1 className='p-3'>₹20</h1>
                            <p className='p-3'>Intraday and
                            F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;