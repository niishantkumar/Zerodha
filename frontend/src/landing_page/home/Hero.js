import React from 'react';

function Hero() {
    return (
        <div className='container  p-3 mb-5 mt-1'>
            <div className='row text-center'>
                <div className='col'>
                    <img src='media/images/homeHero.png' alt='HeroImage' className='img-fluid mb-4' />
                    <h1 className='mt-4 mb-2 display-5 fw-bold'>Invest in everything</h1>
                    <p className='mb-4 fs-5 text-muted'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                    <button className='p-3 btn btn-primary fs-5 rounded-pill' style={{ minWidth: "250px" }}>
                        Sign up for free
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;