import React from 'react';

function CreateTicket() {
    return (
        <div className='container'>

            <div className='row mt-5 p-2'>
                <div className='col'>
                    <h2>To create a ticket, select a relevant topic</h2>
                </div>
            </div>

            <div className='row mt-4 mb-4 p-2'>
                <div className='col-lg-4 d-flex flex-column gap-3 mb-5'>
                    <h3 className='fs-4'><i className="fas fa-plus-circle fs-5"></i> &nbsp;Account Opening</h3>

                    <a href='' style={{ textDecoration: "none" }}> Online Account Opening </a>
                    <a href='' style={{ textDecoration: "none" }}> Offline Account Opening </a>
                    <a href='' style={{ textDecoration: "none" }}> Company, Partnership and HUF Account Opening </a>
                    <a href='' style={{ textDecoration: "none" }}> NRI Account Opening </a>
                    <a href='' style={{ textDecoration: "none" }}> Charges at Zerodha </a>
                    <a href='' style={{ textDecoration: "none" }}> Zerodha IDFC FIRST Bank 3-in-1 Account </a>
                    <a href='' style={{ textDecoration: "none" }}> Getting Started</a>
                </div>

                <div className='col-lg-4 d-flex flex-column gap-3 mb-5'>
                    <h3 className='fs-4'><i className="fas fa-user fs-5"></i> &nbsp;Your Zerodha Account</h3>

                    <a href='' style={{ textDecoration: "none" }}> Login Credentials </a>
                    <a href='' style={{ textDecoration: "none" }}> Account Modification and Segment Addition </a>
                    <a href='' style={{ textDecoration: "none" }}> DP ID and bank details </a>
                    <a href='' style={{ textDecoration: "none" }}> Your Profile </a>
                    <a href='' style={{ textDecoration: "none" }}> Transfer and conversion of shares </a>

                </div>

                <div className='col-lg-4 d-flex flex-column gap-3 mb-5'>
                    <h3 className='fs-4'><i className="fas fa-chart-column fs-5"></i> &nbsp;Your Zerodha Account</h3>

                    <a href='' style={{ textDecoration: "none" }}> Margin/leverage, Product and Order types </a>
                    <a href='' style={{ textDecoration: "none" }}> Kite Web and Mobile </a>
                    <a href='' style={{ textDecoration: "none" }}> Trading FAQs </a>
                    <a href='' style={{ textDecoration: "none" }}> Corporate Actions </a>
                    <a href='' style={{ textDecoration: "none" }}> Sentinel </a>
                    <a href='' style={{ textDecoration: "none" }}> Kite API </a>
                    <a href='' style={{ textDecoration: "none" }}> Pi and other platform</a>
                    <a href='' style={{ textDecoration: "none" }}> Stockreports+</a>
                    <a href='' style={{ textDecoration: "none" }}> GTT</a>

                </div>

            </div>
            <div className='row mt-4 mb-4 p-2'>
                <div className='col-lg-4 d-flex flex-column gap-3 mb-5'>
                    <h3 className='fs-4'><i className="fas fa-credit-card fs-5"></i> &nbsp;Funds</h3>

                    <a href='' style={{ textDecoration: "none" }}> Adding Funds </a>
                    <a href='' style={{ textDecoration: "none" }}> Fund Withdrawal </a>
                    <a href='' style={{ textDecoration: "none" }}> eMandates </a>
                    <a href='' style={{ textDecoration: "none" }}> Adding Bank Accounts </a>

                </div>

                <div className='col-lg-4 d-flex flex-column gap-3 mb-5'>
                    <h3 className='fs-4'><i class="fa-solid fa-circle-notch fs-5"></i> &nbsp;Console</h3>

                    <a href='' style={{ textDecoration: "none" }}> Reports </a>
                    <a href='' style={{ textDecoration: "none" }}> Ledger </a>
                    <a href='' style={{ textDecoration: "none" }}> Portfolio </a>
                    <a href='' style={{ textDecoration: "none" }}> 60 Day Challenge </a>
                    <a href='' style={{ textDecoration: "none" }}> IPO </a>
                    <a href='' style={{ textDecoration: "none" }}> Referral Program </a>

                </div>

                <div className='col-lg-4 d-flex flex-column gap-3 mb-5'>
                    <h3 className='fs-4'><i class="fa-solid fa-coins fs-5"></i> &nbsp;Coin</h3>

                    <a href='' style={{ textDecoration: "none" }}> Understanding Mutual Funds </a>
                    <a href='' style={{ textDecoration: "none" }}> About Coin </a>
                    <a href='' style={{ textDecoration: "none" }}> Buying and Selling through Coin </a>
                    <a href='' style={{ textDecoration: "none" }}> Starting an SIP </a>
                    <a href='' style={{ textDecoration: "none" }}> Managing your Portfolio </a>
                    <a href='' style={{ textDecoration: "none" }}> Coin App </a>
                    <a href='' style={{ textDecoration: "none" }}> Moving to Coin</a>
                    <a href='' style={{ textDecoration: "none" }}> Government Securities</a>
                </div>

            </div>

        </div>
    );
}

export default CreateTicket;