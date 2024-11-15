import React from 'react';
function CreatTicket() {
    return ( 
        <div className='container mt-5 p-4'>
            <div className='row text-muted'>
                <h3>To create a ticket , select a relevant topic</h3>
            </div>
            <div className='row mt-4' style={{ textAlign: "left", lineHeight: "1.8"}}>
                <div className='col-4'>
                    <h5 className='mb-3 '>Account Opening</h5>
                   <a href='' style={{textDecoration:"none"}}>Getting started</a><br/>
                   <a href='' style={{textDecoration:"none"}}> Online</a><br/>
                   <a href='' style={{textDecoration:"none"}}> Offline</a><br/>
                   <a href='' style={{textDecoration:"none"}}> Charges</a><br/>
                   <a href='' style={{textDecoration:"none"}}>Company, Partnership and HUF</a><br/>
                   <a href='' style={{textDecoration:"none"}}>Non Resident Indian  (NRI)</a><br/>
                </div>
                <div className='col-4'>
                    <h5 className='mb-3 '>Your Zerodha Account</h5>
                   <a href='' style={{textDecoration:"none"}}>Login credentials</a><br/>
                   <a href='' style={{textDecoration:"none"}}>Your Profile</a><br/>
                   <a href='' style={{textDecoration:"none"}}> Account modification and segment addition</a><br/>
                   <a href='' style={{textDecoration:"none"}}> CMR & DP ID</a><br/>
                   <a href='' style={{textDecoration:"none"}}>Nomination</a><br/>
                   <a href='' style={{textDecoration:"none"}}>Transfer and conversion of shares</a><br/>
                </div>
                <div className='col-4'>
                    <h5 className='mb-3 '>Trading and Market</h5>
                   <a href='' style={{textDecoration:"none"}}>Trading FAQs</a><br/>
                   <a href='' style={{textDecoration:"none"}}> Kite</a><br/>
                   <a href='' style={{textDecoration:"none"}}> Margins</a><br/>
                   <a href='' style={{textDecoration:"none"}}> Product and order types</a><br/>
                   <a href='' style={{textDecoration:"none"}}>Corporate actions</a><br/>
                   <a href='' style={{textDecoration:"none"}}>Kite features</a><br/>
                </div>
                <div className='col-4'>
                    <h5 className='mb-3 mt-3'>Funds</h5>
                   <a href='' style={{textDecoration:"none"}}>Fund withdrawal</a><br/>
                   <a href='' style={{textDecoration:"none"}}> Adding funds</a><br/>

                   <a href='' style={{textDecoration:"none"}}> Adding bank accounts</a><br/>
                   <a href='' style={{textDecoration:"none"}}>eMandates</a><br/>

                </div>
                <div className='col-4'>
                    <h5 className='mb-3 mt-3'>Console</h5>
                   <a href='' style={{textDecoration:"none"}}>IPO</a><br/>
                   <a href='' style={{textDecoration:"none"}}>Portfolio</a><br/>
                   <a href='' style={{textDecoration:"none"}}> Funds statement</a><br/>
                   <a href='' style={{textDecoration:"none"}}>Profile</a><br/>
                   <a href='' style={{textDecoration:"none"}}>Reports</a><br/>
                   <a href='' style={{textDecoration:"none"}}>Referral program)</a><br/>
                </div>
                <div className='col-4'>
                    <h5 className='mb-3 mt-3'>Coin</h5>
                   <a href='' style={{textDecoration:"none"}}>Understanding mutual funds and Coin</a><br/>
                   <a href='' style={{textDecoration:"none"}}> Coin app</a><br/>
                   <a href='' style={{textDecoration:"none"}}> Coin web</a><br/>
                   <a href='' style={{textDecoration:"none"}}> Charges</a><br/>
                   <a href='' style={{textDecoration:"none"}}>Transactions and reports</a><br/>
                   <a href='' style={{textDecoration:"none"}}>National Pension Scheme (NPS)</a><br/>
                </div>
            </div>
       
        </div>
     );
}

export default CreatTicket;