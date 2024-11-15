import React from 'react';
function LeftSection({imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore}) {
    return ( 
       <div className='container mt-2 p-4'>
        <div className='row'>
            <div className='col-6 p-5'>
                <img src={imageURL}/>
            </div>
            <div className='col-6 p-5 mt-5'>
                <h1>{productName}</h1>
                <p className='mt-4'>{productDescription}</p>
                <div>
                <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo</a>
                <a href={learnMore} style={{marginLeft:"100px", textDecoration:"none"}}>Learn More</a>
                </div>
                <div className='mt-3'>
                <a href={googlePlay} ><img src="media/images/googlePlayBadge.svg"/></a>
                <a href={appStore} style={{marginLeft:"25px"}}><img src="media/images/appstoreBadge.svg"/></a>

                </div>
            </div>
        </div>
        </div>
       
     );
}

export default LeftSection;