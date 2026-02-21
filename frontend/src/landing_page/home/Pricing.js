import React from 'react';

function Pricing() {
    return (
        <div className='container py-5'>
            <div className='row align-items-center'>
                <div className='col-md-4 text-center text-md-start mb-5 mb-md-0'>
                    <h2 className='mb-4'>Unbeatable pricing</h2>
                    <p className='text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' className='text-decoration-none'>See pricing <i className="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='col-md-1'></div>
                <div className='col-md-7'>
                    <div className='row text-center g-0'>
                        <div className='col-sm-6 border p-4'>
                            <h1 className='mb-3'>₹0</h1>
                            <p className='text-muted'>Free equity delivery and <br /> direct mutual funds</p>
                        </div>
                        <div className='col-sm-6 border p-4'>
                            <h1 className='mb-3'>₹20</h1>
                            <p className='text-muted'>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;