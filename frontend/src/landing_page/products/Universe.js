import React from 'react';

function Universe() {
    return (
        <div className='container'>
            <div className='row p-3 mt-5 mb-4'>
                <div className='col text-center text-muted'>
                    <h1 className='fs-2 mt-3 mb-3'>The Zerodha Universe</h1>
                    <p>Extend your trading and investment experience even further with our partner platforms</p>
                </div>
            </div>

            <div className='row text-muted text-center mb-3'>
                <div className='col-4'>
                    <img src='media/images/zerodhaFundhouse.png' alt='image' className='img-fluid w-50' />

                    <p className='p-4' >Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.</p>
                </div>
                <div className='col-4'>
                    <img src='media/images/sensibullLogo.svg' alt='image' className='img-fluid w-50 mt-2' />

                    <p className='p-4'>Options trading platform that lets you
                        create strategies, analyze positions, and examine
                        data points like open interest, FII/DII, and more.
                    </p>
                </div>
                <div className='col-4'>
                    <img src='media/images/tijori.svg' alt='image' className='img-fluid w-50' />

                    <p className='p-4'>Investment research platform
                        that offers detailed insights on stocks,
                        sectors, supply chains, and more.
                    </p>
                </div>
            </div>

            <div className='row text-muted text-center mb-2'>
                <div className='col-4'>
                    <img src='media/images/streakLogo.png' alt='image' className='img-fluid w-50' />

                    <p className='p-4' >Systematic trading platform
                        that allows you to create and backtest
                        strategies without coding.</p>
                </div>
                <div className='col-4'>
                    <img src='media/images/smallcaseLogo.png' alt='image' className='img-fluid w-50 mt-2' />

                    <p className='p-4'>Thematic investing platform
                        that helps you invest in diversified
                        baskets of stocks on ETFs.
                    </p>
                </div>
                <div className='col-4'>
                    <img src='media/images/dittoLogo.png' alt='image' className='img-fluid w-50' />

                    <p className='p-4'>Personalized advice on life
                        and health insurance. No spam
                        and no mis-selling.
                    </p>
                </div>
            </div>

            <div className='row mb-5'>
                <div className='col text-center'>
                    <button className='p-3 btn btn-primary fs-5 rounded-pill' style={{ minWidth: "250px" }}>
                        Sign up for free
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Universe;