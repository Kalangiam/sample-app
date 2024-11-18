import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AxiosService from '../utils/AxiosService';
import toast from 'react-hot-toast';

function ResetPassword() {
    const [newPassword, setNewPassword] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const params = new URLSearchParams(location.search);
        const token = params.get('token');
        const email = params.get('email');

        try {
            const res = await AxiosService.post('http://localhost:5000/users/reset-password', { token, email, newPassword });
            if (res.status === 200) {
                toast.success("Password reset successfully!");
                navigate('/login');
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong");
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4">
                <h4 className="text-center mb-4">Reset Password</h4>
                <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter new password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                        <label className="form-label">New Password</label>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Reset Password</button>
                </form>
            </div>
        </div>
    );
}

export default ResetPassword;
