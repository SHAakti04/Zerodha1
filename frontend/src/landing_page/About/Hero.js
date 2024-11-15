import React from 'react';
function Hero() {
    return (
        <div className='container mt-5'>
            <div className='row p-4 mb-5'>
                <h1 className='fs-2 text-center'>We pioneered the discount broking model in India.
                    <br /> Now, we are breaking ground with our technology.</h1>
            </div>
            <hr />
            <div className='row  mt-5 p-4 text muted fs-6'>
               <div className='col-1'></div>
                <div className='col-5 p-4' style={{lineHeight:"1.8" ,fontSize:"1.2em"}}>
                    <p>
                        We kick-started operations on the 15th of August, 2010<br/>
                        with the goal of breaking all barriers that traders and<br/>
                        investors face in India in terms of cost, support, and<br/>
                        technology. We named the company Zerodha, a combination<br/>
                        of Zero and "Rodha", the Sanskrit word for barrier.<br/>
                    </p><p>
                        Today, our disruptive pricing models and in-house<br/>
                        technology have made us the biggest stock broker in India.<br/>
                    </p><p>
                        Over 1+ Crore clients place millions of orders every<br/>
                        day through our powerful ecosystem of investment<br/>
                        platforms, contributing over 15% of all Indian retail<br/>
                        trading volumes.<br/>
                    </p>
                </div>
                <div className='col-1'></div>
                <div className='col-5 p-4' style={{lineHeight:"1.8" ,fontSize:"1.2em"}}>
                    <p>
                        In addition, we run a number of popular open online<br/>
                        educational and community initiatives to empower<br/>
                        retail traders and investors.<br/>
                    </p><p>
                       <a href='' style={{textDecoration:"none"}}>Rainmatter</a>, our fintech fund and incubator, has<br/>
                        invested in several fintech startups with the goal<br/>
                        of growing the Indian capital markets.<br/>
                    </p><p>
                        And yet, we are always up to something new every day.<br/>
                        Catch up on the latest updates on our blog or see<br/>
                        what the media is saying about us.<br/>
                    </p>
                </div>
               

            </div>
        </div>
    );
}

export default Hero;