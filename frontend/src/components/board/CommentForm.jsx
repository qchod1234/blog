import React, { useState } from "react";
import './CommentForm.css';

const CommentForm = ({ onSubmit, isAdmin }) => {
    const [nickname, setNickname] = useState("");
    const [password, setPassword] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const currentNickname = isAdmin ? "Admin" : nickname;
        const currentPassword = isAdmin ? "" : password;

        if (currentNickname === "") {
            alert("Please enter your nickname.");
            return;
        }
        if (!isAdmin && currentPassword === "") {
            alert("Please enter your password.");
            return;
        }
        if (content === "") {
            alert("Please enter the content.");
            return;
        }

        onSubmit({ nickname: currentNickname, password: currentPassword, content });

        if (!isAdmin) {
            setNickname("");
            setPassword("");
        }
        setContent("");
    };

    return (
        <form className="board-form" onSubmit={handleSubmit}>
            {isAdmin ? (<input type="text" value="Admin" readOnly className="board-input disabled"/>)
                : (<input type="text" value={nickname} onChange={e => setNickname(e.target.value)} className="board-input"/>)
            }
            {!isAdmin && <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="board-input"/>}
            <textarea value={content} onChange={e => setContent(e.target.value)} className="board-textarea"/>
            <div className="submit-container">
                <button type="submit" className="submit-btn">Submit</button>
            </div>
        </form>
    );
};

export default CommentForm;
