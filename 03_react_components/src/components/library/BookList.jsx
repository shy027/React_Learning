import BookItem from "./BookItem";
import "./style.css"

const BookList = ({BookData, onDelete}) => {
    const books = Array.isArray(BookData) ? BookData : [];
    return (
        <div>
            <h2>图书列表</h2>
            <div className="list">
                <ul>
                    {books.map((book) => (
                        <li key={book.id}>
                        <BookItem bookName={book.name} bookAuthor={book.author} bookDetails={book.details} onDelete={() => onDelete(book.id)}></BookItem>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default BookList