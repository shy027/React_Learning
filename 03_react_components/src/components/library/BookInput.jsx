/*
 * @Author: shy 1533103845@qq.com
 * @Date: 2025-02-25 13:13:58
 * @LastEditors: shy 1533103845@qq.com
 * @LastEditTime: 2025-02-26 13:33:16
 * @FilePath: \03_react_components\src\components\library\BookInput.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Input, Button } from "antd";
import { useState } from "react";
import BookList from "./BookList";
import "./style.css";

const BookInput = () => {
  const [bookName, setBookName] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookDetails, setBookDetails] = useState("");
  const [bookData, setBookData] = useState([]);
  const [bookId, setBookId] = useState(-1);

  const handleSubmit = () => {
    setBookId((prevId) => prevId + 1);
    const newBook = {
      name: bookName,
      author: bookAuthor,
      details: bookDetails,
      id: bookId,
    };

    // 将新图书对象添加到 bookData 数组中
    setBookData((prevBookData) => [...prevBookData, newBook]);
    setBookName("");
    setBookAuthor("");
    setBookDetails("");
  };

  const handleDelete = (id) => {
    setBookData((prevBookData) => {
      // 使用 filter 方法移除指定 id 的图书
      return prevBookData.filter((book) => book.id !== id);
    });
  };

  return (
    <>
      <div className="content">
        <h1> 图书管理系统</h1>
        <Input
          placeholder="请输入图书名称"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
          className="input"
        />
        <br></br>
        <Input
          placeholder="请输入图书作者"
          value={bookAuthor}
          onChange={(e) => setBookAuthor(e.target.value)}
          className="input"
        />
        <br></br>
        <Input
          placeholder="请输入图书详情"
          value={bookDetails}
          onChange={(e) => setBookDetails(e.target.value)}
          className="input"
        />
        <br></br>
        <Button onClick={handleSubmit}>提交</Button>
        <BookList BookData={bookData} onDelete={handleDelete}></BookList>
      </div>
    </>
  );
};
export default BookInput;
