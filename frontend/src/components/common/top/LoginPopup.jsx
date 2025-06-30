import './LoginPopup.css';

const LoginPopup = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="overlay crimson-text-regular" onClick={onClose}>
            <div className="popup" onClick={e => e.stopPropagation()}>
                <h2 className="popup__title">LOGIN</h2>

                <label className="popup__label" htmlFor="admin-id">Account ID</label>
                <input id="admin-id" type="text" className="popup__input" />

                <label className="popup__label" htmlFor="admin-password">Account Password</label>
                <input id="admin-password" type="password" className="popup__input" />

                <button className="popup__button">SIGN IN</button>
            </div>
        </div>
    );
};

export default LoginPopup;
