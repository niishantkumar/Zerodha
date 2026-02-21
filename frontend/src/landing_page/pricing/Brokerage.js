import React from 'react';

function Brokerage() {
    return (
        < div className='container'>

            {/* row 1 */}
            <div className='row mt-5 mb-5 p-2'>
                <div className='col-md-8 p-2'>
                    <h2 className='fs-3 mb-4 text-center text-primary'>Brokerage calculator</h2>
                    <ul className='d-flex flex-column gap-3 text-muted'>
                        <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                        <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                        <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                    </ul>
                </div>
                <div className='col-md-4 p-2'>
                    <h2 className='fs-3 mb-3  text-center text-primary'>List of charges</h2>

                </div>
            </div>
        </div>
    );
}

export default Brokerage;