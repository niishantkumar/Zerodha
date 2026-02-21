import React from 'react';

function Team() {
    return (
        <div className='container'>

            <div className='row text-center '>
                <h1 className='fs-3'>People</h1>
            </div>

            <div className='row mt-5 text-center mb-5'>

                <div className='col-lg-5 p-2 '>

                    <img src='media/images/nithinKamath.jpg' alt='founder' className='rounded-pill img-fluid w-50'></img>

                    <p className='fs-5-6 text-center mt-3 fw-bold'>Nithin Kamath</p>

                    <p className='fs-5-6 text-center mt-2 fs-6'>Founder, CEO</p>

                </div>
                <div className='col-lg-5 p-5'>
                    <p className='fs-5-6'>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

                    <p className='fs-5-6'>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                    <p className='fs-5-6'>Playing basketball is his zen.</p>

                    <p className='fs-5-6'>Connect on <a href='https://nithinkamath.me' style={{ textDecoration: "none" }}> Homepage </a>/  <a href='https://tradingqna.com/u/nithin/summary' style={{ textDecoration: "none" }}> TradingQnA</a> / <a href='https://twitter.com/Nithin0dha' style={{ textDecoration: "none" }}> Twitter </a></p>

                </div>

            </div>
        </div>
    );
}

export default Team;