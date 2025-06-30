import React from "react";
import UserComment from "./UserComment";
import AdminComment from "./AdminComment";

import './CommentList.css';

const CommentList = ({ comments, onDelete }) => {
    return (
        <section className="board-output">
            {comments.map(comment =>
                comment.admin ?
                    <AdminComment key={comment.id} item={comment}/> :
                    <UserComment key={comment.id} item={comment} onDelete={onDelete}/>
            )}
        </section>
    );
};

export default CommentList;
