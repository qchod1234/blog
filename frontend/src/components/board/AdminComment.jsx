import './CommentItem.css';
import {dateUtil} from "../../utils/js/dateUtil.js";

const AdminComment = ({ item }) => {

    return (
        <div className="board-item-row admin-board-item">
            <div className="board-item-admin">
                <div className="admin-header">
                    <span>Admin</span>
                    <span className="admin-icon">
                        <i className="bi bi-check"></i>
                    </span>
                </div>
                <div className="content-row"><span className="content">{item.content}</span></div>
                <div className="date-row"><span className="createdAt">{dateUtil(new Date(item.createdAt))}</span></div>
            </div>
        </div>
    );

};

export default AdminComment;
