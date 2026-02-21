import React from 'react';

function RightSection({ imageURL, productName, productDescription, firstLink, firstLinkContent }) {
    return (
        <div className='container mb-5'> {/* Increased bottom margin for section spacing */}
            {/* Added align-items-center to vertically center the text and image */}
            <div className='row mt-4 align-items-center'>

                {/* Left Column: Text */}
                <div className='col-md-6 p-4'> {/* Standardized padding */}
                    <h4 className='fs-4 mb-3'>{productName}</h4> {/* Removed mt-4 to prevent top-heaviness */}
                    <p className="text-muted">{productDescription}</p>

                    {firstLink && (
                        <a href={firstLink} className='text-decoration-none'>
                            {firstLinkContent} <i className="fa-solid fa-arrow-right ms-2"></i>
                        </a>
                    )}
                </div>


                <div className='col-md-6 p-4 text-center'>
                    <img src={imageURL} alt='product' className='img-fluid' />
                </div>
            </div>
        </div>
    );
}

export default RightSection;