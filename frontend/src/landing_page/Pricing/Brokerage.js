import React from 'react';

function Brokerage() {
    return ( 
       <div className='container p-4'>
        <div className='row border-top mt-5 text-center'>
          <div className='col-8'>
           <a href="" style={{ textDecoration: "none" }}>
             <h3 className='fs-5 p-4'>Brokerage calculator</h3>
           </a> 
            <ul style={{ textAlign: "left", lineHeight: "2.5", fontSize: "13px" }} className='p-4 text-muted'>
              <li><p>₹100 per order for futures and options.</p></li>
              <li><p>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</p></li>
              <li><p>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</p></li>
              <li><p>₹500 + GST as yearly account maintenance charges (AMC) charges.</p></li>
              <li><p>Equity and Futures - ₹10 per crore + GST of the traded value.</p></li>
              <li><p>Options - ₹50 per crore + GST traded value (premium value).</p></li>
              <li><p>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</p></li>
            </ul>
          </div>
          <div className='col-4'>
            <a href="" style={{ textDecoration: "none" }}>
              <h3 className='fs-5 p-4'>List of charges</h3>
            </a>
          </div>
        </div>
       </div>
     );
}

export default Brokerage;
