import  { useState } from "react";
import { Button, Modal } from "antd";

const BookDetail = ({ bookName, bookAuthor, bookDetails}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Button onClick={showModal}>详情</Button>
            <Modal
                title="图书详情"
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
            >
                <p>书名：{bookName}</p>
                <p>作者：{bookAuthor}</p>
                <p>详情：{bookDetails}</p>
            </Modal>
        </>
    );
};

export default BookDetail;