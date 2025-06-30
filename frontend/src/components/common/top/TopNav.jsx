import { NavLink } from "react-router-dom";
import { useState } from "react";
import LoginPopup from "./LoginPopup.jsx";
import "./TopNav.css";

const TopNav = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => setIsPopupOpen(prev => !prev);
    const closePopup = () => setIsPopupOpen(false);

    return (
        <>
            <nav className="top-nav-container crimson-text-regular">
                <div className="top-nav">
                    <div className="top-nav__logo" tabIndex={0}>Logo</div>
                    <ul className="top-nav__menu">
                        <li className="top-nav__item">
                            <NavLink to="/" className={({isActive}) => `top-nav__link ${isActive ? "active" : ""}`}>
                                Home
                            </NavLink>
                        </li>
                        <li className="top-nav__item">
                            <NavLink to="/about" className={({isActive}) => `top-nav__link ${isActive ? "active" : ""}`}>
                                About
                            </NavLink>
                        </li>
                        <li className="top-nav__item">
                            <NavLink to="/post" className={({isActive}) => `top-nav__link ${isActive ? "active" : ""}`}>
                                Post
                            </NavLink>
                        </li>
                        <li className="top-nav__item">
                            <NavLink to="/archive" className={({isActive}) => `top-nav__link ${isActive ? "active" : ""}`}>
                                Archive
                            </NavLink>
                        </li>
                        <li className="top-nav__item">
                            <NavLink to="/board" className={({isActive}) => `top-nav__link ${isActive ? "active" : ""}`}>
                                Board
                            </NavLink>
                        </li>
                    </ul>
                    <button
                        className={`top-nav__admin-btn ${isPopupOpen ? "open" : ""}`}
                        aria-label="Admin menu"
                        aria-expanded={isPopupOpen}
                        onClick={togglePopup}
                    >
                    <i className="bi bi-asterisk" aria-hidden="true"></i>
                    </button>
                </div>
            </nav>

            <LoginPopup isOpen={isPopupOpen} onClose={closePopup} />
        </>
    );
};

export default TopNav;
