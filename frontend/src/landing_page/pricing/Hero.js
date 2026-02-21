import React from 'react';

function Hero() {
    return (
        < div className='container'>

            {/* row 1 */}
            <div className='row mt-5 mb-5 p-2'>
                <div className='col text-center'>
                    <h1 className='fs-2 mb-3 '>Charges</h1>
                    <p className='fs-5 mb-2 text-muted'> Free equity investments and flat ₹20 traday and F&O trades</p>
                </div>
            </div>

            {/* row 2 */}
            <div className='row mt-5 mb-5 p-2 text-center text-muted'>
                <div className='col-lg-4 col-md-6 p-4'>
                    <img src='media/images/pricing0.svg' alt='image' className='img-fluid w-75' />
                    <h2 className='fs-2 '>Free equity delivery</h2>
                    <p>All equity delivery investments (NSE, BSE),   <br />are absolutely  free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-lg-4 col-md-6 p-4'>
                    <img src='media/images/intradayTrades.svg' alt='image' className='img-fluid w-75' />
                    <h2 className='fs-2'>Intraday and F&O trades</h2>
                    <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-lg-4 col-md-12 p-4'>
                    <img src='media/images/pricingMF.svg' alt='image' className='img-fluid w-75 ' />
                    <h2 className='fs-2'>Free direct MF</h2>
                    <p>All direct mutual fund investments are absolutely <br /> free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;