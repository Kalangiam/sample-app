import React, { useState } from 'react';
import toast from 'react-hot-toast';
import AxiosService from '../utils/AxiosService';

function ForgetPassword() {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await AxiosService.post('http://localhost:5000/users/forget-password', { email });
            if (res.status === 200) {
                toast.success("Reset link sent to your email!");
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong");
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4">
                <h4 className="text-center mb-4">Forgot Password</h4>
                <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter your registered email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label className="form-label">Email</label>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Send Reset Link</button>
                </form>
            </div>
        </div>
    );
}

export default ForgetPassword;
