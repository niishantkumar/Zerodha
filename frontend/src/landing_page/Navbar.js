import React from 'react';

import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top border-bottom bg-white">
            <div className="container p-2">
                <Link className="navbar-brand" to="/" style={{ width: "150px" }}>
                    <img src='media/images/logo.svg' alt='logo' className="img-fluid" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-semibold">
                        <li className="nav-item px-3 "><Link className="nav-link" to="/signup">Signup</Link></li>
                        <li className="nav-item px-3 "><Link className="nav-link" to="/about">About</Link></li>
                        <li className="nav-item px-3 "><Link className="nav-link" to="/product">Products</Link></li>
                        <li className="nav-item px-3 "><Link className="nav-link" to="/pricing">Pricing</Link></li>
                        <li className="nav-item px-3 "><Link className="nav-link" to="/support">Support</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;