import React from 'react'

function OpenAccount() {
    return ( 
        <div className='container p-5'>
            <div className='row text-center'>
                <div className='col'>
                    <h1 className='p-3'>Open a Zerodha account</h1>
                    <p className='text-muted fw-normal p-3' style={{fontSize:"18px"}}>
                    Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
                    </p>
                    <button className='p-2 btn btn-primary fs-5 mt-3 mb-5 fw-bold' style={{width:"20%", margin:"0 auto"}}>
                    Sign up for free
                    </button>
                </div>
            </div>
        </div>
     );
}

export default OpenAccount;