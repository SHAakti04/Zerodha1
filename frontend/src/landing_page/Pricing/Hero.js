import React from 'react';
function Hero() {
    return ( 
       <div className='container mt-5 mb-5 p-4'>
        <div className='row text-center border-bottom text-muted mt-3  fs-5'>
            <h1 >Pricing</h1>
            <h6 className='p-3 mb-5 text-muted'>Free equity investments and flat 20 rupee today and F&O trades</h6>
        </div>
        <div className='row text-center mt-5 p-4'>
            <div className='col-4'>
               <img src='media/images/pricingEquity.svg' />

               <h1 className='fs-3'>Free equity delivery</h1>
               <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div className='col-4 p-4'>
               <img src='media/images/intradayTrades.svg' />

               <h1 className='fs-3'>Intraday and F&O trades</h1>
               <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
            <div className='col-4 p-4'>
               <img src='media/images/pricingEquity.svg' />

               <h1 className='fs-3'>Free direct MF</h1>
               <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>

        </div>
       </div>
     );
}

export default Hero;