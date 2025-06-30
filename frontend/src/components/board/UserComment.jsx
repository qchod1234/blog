import React, { useState } from "react";

import './CommentItem.css';
import {dateUtil} from "../../utils/js/dateUtil.js";

const UserComment = ({ item, onDelete }) => {
    const [showDeleteInput, setShowDeleteInput] = useState(false);
    const [inputPassword, setInputPassword] = useState("");

    const handleDelete = () => {
        onDelete(item.id, inputPassword);
        setInputPassword("");
        setShowDeleteInput(false);
    };

    const cancelDelete = () => {
        setInputPassword("");
        setShowDeleteInput(false);
    };

    return (
        <div className="board-item-row user-board-item">
            <div className="board-item-user">
                <div className="commentHeadRow">
                    <div className="nickname-box">
                        <span className="nickname">{item.nickname}</span>
                    </div>
                    <div className="deleteContainer" data-id={item.id} style={{ paddingLeft: showDeleteInput ? "12px" : "" }}>
                        {showDeleteInput ? (
                            <div className="password-input-box" style={{ display: "flex" }}>
                                <input
                                    type="password"
                                    className="password-input"
                                    value={inputPassword}
                                    onChange={(e) => setInputPassword(e.target.value)}
                                />
                                <button className="delete-btn" onClick={handleDelete}>
                                    <i className="bi bi-check"></i>
                                </button>
                                <button className="cancel-btn" onClick={cancelDelete}>
                                    <i className="bi bi-x"></i>
                                </button>
                            </div>
                        ) : (
                            <span className="delete-icon" onClick={() => setShowDeleteInput(true)}>
                                <i className="bi bi-x"></i>
                            </span>
                        )}
                    </div>
                </div>
                <div className="content-row">
                    <span className="content">{item.content}</span>
                </div>
                <div className="date-row">
                    <span className="createdAt">{dateUtil(new Date(item.createdAt))}</span>
                </div>
            </div>
        </div>
    );
};

export default UserComment;
