import React from 'react';
function Awards() {
    return ( 
        <div className='container p-4 mt-3'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media\images\largestBroker.svg'></img>
                </div>
                <div className='col-6 mt-3 p-5'>
                    <h1 >Largest stock broker in India</h1>
                    <p className='mb-5'>2+ million TradeSphere clients contribute to over 15% of all retail trading volumes in India by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                               <li>
                                <p>Future and Options</p>
                               </li>
                               <li>
                                <p>Commodity derivatives</p>
                               </li>
                               <li>
                                <p>Currency derivatives</p>
                               </li>
                            </ul>

                        </div>
                        <div className='col-6'>
                        <ul>
                               <li>
                                <p>Stocks & IPOs</p>
                               </li>
                               <li>
                                <p>Direct Mutual funds</p>
                               </li>
                               <li>
                                <p>Bond and Growth</p>
                               </li>
                            </ul> 
                        </div>
                    </div>
                    <img src='media\images\pressLogos.png' style={{width:'90%'}}></img>
                </div>
            </div>

        </div>
     );
}

export default Awards;