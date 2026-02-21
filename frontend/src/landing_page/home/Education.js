import React from 'react';

function Education() {
    return (
        <div className='container py-5 my-5'>
            <div className='row align-items-center'>
                <div className='col-md-6 text-center'>
                    <img src='media/images/education.svg' alt='education' className='img-fluid' style={{ width: "80%" }} />
                </div>
                <div className='col-md-6 p-4 text-center text-md-start'>
                    <h2 className='mb-4'>Free and open market education</h2>
                    <p className='mb-3'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='' className='text-decoration-none'>Varsity <i className="fa-solid fa-arrow-right"></i></a>

                    <p className='mb-3 mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='' className='text-decoration-none'>TradingQ&A <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;