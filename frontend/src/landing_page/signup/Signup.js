import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });
    const [validated, setValidated] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;

        // Bootstrap validation
        if (form.checkValidity() === false) {
            e.stopPropagation();
            setValidated(true);
            return;
        }

        setValidated(true);

        alert("Signup successful!");
        navigate("/");
    };

    return (
        <div className="container signup-div mt-5 mb-5">
            <div className='row p-2 text-center text-muted'>
                <div className='col'>
                    <h1 className='fs-2 fw-bold mb-3'>
                        Open a free demat and trading account online
                    </h1>
                    <p className='fs-4 mb-3'>
                        Start investing brokerage free and join a community of 1.6+ crore investors and traders
                    </p>
                </div>
            </div>

            <div className="row mt-5 p-4 border rounded-4 shadow">
                <div className="col">
                    <h2 className="fw-bold mb-4">Signup</h2>

                    <form
                        className={validated ? "was-validated" : ""}
                        noValidate
                        onSubmit={handleSubmit}
                    >
                        {/* Username */}
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input
                                type="text"
                                id="username"
                                className="form-control"
                                placeholder="Enter username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                            <div className="invalid-feedback">
                                Please choose a username.
                            </div>
                        </div>

                        {/* Email */}
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                placeholder="Enter email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <div className="invalid-feedback">
                                Please provide a valid email.
                            </div>
                        </div>

                        {/* Password */}
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                placeholder="Enter password"
                                value={formData.password}
                                onChange={handleChange}
                                minLength="6"
                                required
                            />
                            <div className="invalid-feedback">
                                Password must be at least 6 characters.
                            </div>
                        </div>

                        <button className="btn btn-primary w-100" type="submit">
                            Signup
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;