import React from 'react';

function LeftSection({ imageURL, productName, productDescription, firstLink, firstLinkContent, secondLink, secondLinkContent, googlePlay, appStore }) {
    return (
        <div className='container mb-3'>

            <div className='row mt-4 align-items-center'>

                <div className='col-md-6 p-4 text-center'>
                    <img src={imageURL} alt='product' className='img-fluid' />
                </div>

                <div className='col-md-6 p-4'>

                    <h4 className='fs-4 mb-3'>{productName}</h4>
                    <p className="text-muted mb-4">{productDescription}</p>


                    <div className='mb-4'>
                        {firstLink && (
                            <a href={firstLink} className='text-decoration-none me-4'>
                                {firstLinkContent} <i className="fa-solid fa-arrow-right ms-1"></i>
                            </a>
                        )}

                        {secondLink && (
                            <a href={secondLink} className='text-decoration-none'>
                                {secondLinkContent} <i className="fa-solid fa-arrow-right ms-1"></i>
                            </a>
                        )}
                    </div>


                    <div className='d-flex align-items-center'>
                        {googlePlay && (
                            <a href={googlePlay} className='me-3'>
                                <img src='media/images/googlePlayBadge.svg' alt='Get it on Google Play' />
                            </a>
                        )}
                        {appStore && (
                            <a href={appStore}>
                                <img src='media/images/appstoreBadge.svg' alt='Download on App Store' />
                            </a>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default LeftSection;