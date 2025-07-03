import React, { useEffect, useState } from "react";
import Header from "../components/common/contents/Header.jsx";
import CommentForm from "../components/board/CommentForm.jsx";
import CommentList from "../components/board/CommentList.jsx";

// import mockData from "../data/mockData";
import { getList, commentAdd, deleteComment } from "../api/boardApi.js";

import { dateUtil } from "../utils/js/dateUtil.js";

const Board = ({isAdmin}) => {
    // const [comments, setComments] = useState(mockData);
    // const [idCounter, setIdCounter] = useState(Math.max(...mockData.map(d => d.id)));
    const [comments, setComments] = useState([]);
    // const [idCounter, setIdCounter] = useState(0);

    useEffect(() => {
        getList()
            .then((list) => {
                setComments(list);
                // const maxId = list.length > 0 ? Math.max(...list.map(d => d.id)) : 0;
                // setIdCounter(maxId);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const handleSubmit = async ({ nickname, password, content }) => {
        const newComment = {
            nickname,
            password,
            content,
            isAdmin: isAdmin
        };

        try {
            await commentAdd(newComment);
            const updatedList = await getList();
            setComments(updatedList);
        } catch (error) {
            console.error("Failed to submit comment:", error);
            alert("Failed to submit comment.");
        }
    };

    const handleDelete = async (id, inputPw) => {
        const target = comments.find(c => c.id === id);
        if (!target) {
            alert("Comment not found.");
            return;
        }

        if (window.confirm("This action cannot be undone. Do you want to proceed?")) {
            try {
                await deleteComment({ id, password: inputPw });
                const updatedList = await getList();
                setComments(updatedList);
            } catch (error) {
                if (error.response && error.response.status === 403) {
                    alert("Incorrect password.");
                } else {
                    alert("Failed to delete comment.");
                    console.error("Delete error:", error);
                }
            }
        }
    };

    return (
        <main className="contents-container crimson-text-regular">
            <Header title="BOARD"/>
            <CommentForm onSubmit={handleSubmit} isAdmin={isAdmin}/>
            <CommentList comments={comments} onDelete={handleDelete}/>
        </main>
    )
}

export default Board;