import React from 'react';

function Hero() {
    return (
        <div className='container-fluid bg-light'>
            <div className='container pt-4 pb-4 p-2'>
                <div className='row  '>
                    <div className='col d-flex justify-content-between'>
                        <h1 className='fw-bold text-muted'>Support Portal</h1>
                        <button type="button" className="btn btn-primary fw-bold">My tickets</button>
                    </div>
                </div>

                <div className='row mt-4 mb-4'>
                    <div className='col'>
                        <form className="d-flex shadow-sm" role="search">
                            <div className="input-group bg-white">
                                <span className="input-group-text">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </span>
                                <input
                                    type="search"
                                    className="form-control p-3 fs-5-6"
                                    placeholder="Eg: How do I open my account, How do i activate F&O ..."
                                />
                            </div>


                        </form>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Hero;