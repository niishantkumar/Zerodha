import React from 'react';

function Awards() {
    return (
        <div className='container p-md-5 p-3 mb-5'>
            <div className='row align-items-center'>
                <div className='col-md-6 p-4'>
                    <img src='media/images/largestBroker.svg' alt='largestBroker' className='img-fluid' />
                </div>
                <div className='col-md-6 p-4'>
                    <h2 className='mb-4'>Largest stock broker in India</h2>
                    <p className='mb-4 fs-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className='row mb-4'>
                        <div className='col-6'>
                            <ul className="d-flex flex-column gap-2">
                                <li>Futures and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul className="d-flex flex-column gap-2">
                                <li>Stocks & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <img src='media/images/pressLogos.png' alt='presslogo' className='img-fluid' style={{ width: "90%" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Awards;