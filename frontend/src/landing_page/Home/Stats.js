import React from 'react';
function Stats() {
    return ( 
        <div className='container mt-3  p-4'>
            <div className='row '>
                <div className='col-6 mt-5 '>
                    <h1 className='mb-5'>Trust with confidence</h1>
                    <div className='mb-3'>
                        <h5>Customer-first always</h5>
                        <p>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    </div>
                    <div  className='mb-3'>
                        <h5>No spam or gimmicks</h5>
                        <p>TNo gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    </div>
                    <div  className='mb-3'>
                        <h5>The TradeSphere universe
                        </h5>
                        <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    </div>
                    <div  className='mb-3'>
                        <h5>Do better with money
                        </h5>
                        <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.

                       </p>
                    </div>
                </div>
                <div className='col-6 p-5 '>
                    <img src='media/images/ecosystem.png' style={{width:"90%"}}/>
                    <div className='text-center'>
                    <a href='' className='mx-5' style={{textDecoration:"none"}}>Explore our products <i class="fa-solid fa-arrow-right-long"></i></a>
                    <a href=''style={{textDecoration:"none"}}>Try Kite demo <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}

export default Stats;