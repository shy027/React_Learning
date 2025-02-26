import { useState } from "react";
import { Input, Button } from "antd";
import BookDetail from "./BookDetail";

const BookItem = ({ bookName, bookAuthor, bookDetails, onDelete}) => {
    const [nowName, setnowName] = useState(bookName);
    const [nowAuthor, setnowAuthor] = useState(bookAuthor);
    const [nowDetails, setnowDetails] = useState(bookDetails);

    const [isEditing, setIsEditing] = useState(false);

    // 状态：编辑时的输入值
    const [editName, setEditName] = useState(bookName);
    const [editAuthor, setEditAuthor] = useState(bookAuthor);
    const [editDetails, setEditDetails] = useState(bookDetails);

    // 切换到编辑模式
    const handleEdit = () => {
        setIsEditing(true);
    };

    // 保存编辑内容
    const handleSave = () => {
        setnowName(editName);
        setnowAuthor(editAuthor);
        setnowDetails(editDetails);
        setIsEditing(false);
    };

    // 取消编辑
    const handleCancel = () => {
        setIsEditing(false);
        setEditName(nowName);
        setEditAuthor(nowAuthor);
        setEditDetails(nowDetails);
    };

    return (
        <div>
            {isEditing ? (
                <div>
                    <Input
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                    />
                    <Input
                        value={editAuthor}
                        onChange={(e) => setEditAuthor(e.target.value)}
                    />
                    <Input
                        value={editDetails}
                        onChange={(e) => setEditDetails(e.target.value)}
                    />
                    <div>
                        <Button onClick={handleSave} variant="solid" color="green">保存</Button>
                        <Button onClick={handleCancel} color="danger" variant="solid">取消</Button>
                    </div>
                </div>
            ) : (
                <div >
                <div className="msg">
                    <p className="msgs">书名：{nowName}</p>
                    <p className="msgs">作者：{nowAuthor}</p>
                    <p className="msgs">简介：{nowDetails}</p>
                </div>
                    
                    <div>
                    <BookDetail bookName={nowName} bookAuthor={nowAuthor} bookDetails={nowDetails}></BookDetail>
                        <Button onClick={handleEdit} color="primary" variant="solid">编辑</Button>
                        <Button onClick={onDelete} color="danger" variant="solid">
                    删除
                </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookItem;