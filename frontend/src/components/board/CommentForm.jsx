import React, { useState } from "react";
import './CommentForm.css';

const CommentForm = ({ onSubmit }) => {
    const [nickname, setNickname] = useState("");
    const [password, setPassword] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (nickname === "") {
            alert("Please enter your nickname.");
            return;
        }
        if (password === "") {
            alert("Please enter your password.");
            return;
        }
        if (content === "") {
            alert("Please enter the content.");
            return;
        }

        onSubmit ({nickname, password, content});
        setNickname(""); setPassword(""); setContent("");
    };

    return (
        <form className="board-form" onSubmit={handleSubmit}>
            <input type="text" value={nickname} onChange={e => setNickname(e.target.value)} className="board-input"/>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="board-input"/>
            <textarea value={content} onChange={e => setContent(e.target.value)} className="board-textarea"/>
            <div className="submit-container">
                <button type="submit" className="submit-btn">Submit</button>
            </div>
        </form>
    );
};

export default CommentForm;
