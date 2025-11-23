import Header from "../components/common/contents/Header.jsx";
import React from "react";
import Editor from "../components/post/editor/Editor.jsx";

const Post = () => {
    return (
        <main className="contents-container crimson-text-regular">
            <Header title="POST"/>
            <Editor/>
        </main>
    )
}

export default Post;