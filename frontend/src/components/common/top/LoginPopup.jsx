import { useState } from "react";
import { login } from "/src/api/auth.js";

import './LoginPopup.css';

const LoginPopup = ({ isOpen, onClose, onLoginSuccess }) => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(id, password);
            setError('');
            setId('');
            setPassword('');
            onLoginSuccess();
            onClose();
        } catch {
            setError("Login failed");
        }
    };

    return (
        <div className="overlay crimson-text-regular" onClick={onClose}>
            <div className="popup" onClick={e => e.stopPropagation()}>
                <h2 className="popup__title">ADMIN</h2>
                <form onSubmit={handleSubmit}>
                    <label className="popup__label" htmlFor="admin-id">Account ID</label>
                    <input id="admin-id" type="text" className="popup__input" value={id}
                           onChange={(e) => setId(e.target.value)}/>

                    <label className="popup__label" htmlFor="admin-password">Account Password</label>
                    <input id="admin-password" type="password" className="popup__input" value={password}
                           onChange={(e) => setPassword(e.target.value)}/>

                    {error && <p className="popup__error">{error}</p>}

                    <button className="popup__button" type="submit">SIGN IN</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPopup;
