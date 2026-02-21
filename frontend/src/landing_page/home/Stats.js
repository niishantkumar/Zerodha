import React from 'react';

function Stats() {
    return (
        <div className='container my-5'>
            <div className='row align-items-center'>
                <div className='col-md-6 col-lg-5 p-4 text-center text-md-start'>
                    <h2 className='mb-5'>Trust with confidence</h2>
                    <h4 className='fs-4 mt-4'>Customer-first always</h4>
                    <p className='text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, contributing to 15% of daily retail exchange volumes in India.</p>

                    <h4 className='fs-4 mt-4'>No spam or gimmicks</h4>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

                    <h4 className='fs-4 mt-4'>The Zerodha universe</h4>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h4 className='fs-4 mt-4'>Do better with money</h4>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we actively help you do better with your money.</p>
                </div>

                <div className='col-md-6 col-lg-7 p-4 text-center'>
                    <img src='media/images/ecosystem.png' alt='ecosystem' className='img-fluid' />
                    <div className='d-flex justify-content-center gap-4 mt-3'>
                        <a href='' className='text-decoration-none'>Explore our products <i className="fa-solid fa-arrow-right"></i></a>
                        <a href='' className='text-decoration-none'>Try Kite demo <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;