import { useSelector } from "react-redux";
import { Book } from "../../models/booksModel";
import { addBookWish } from "../../features/books/booksSlice";
import { ToastContainer, toast } from "react-toastify";
import { RootState } from "../../app/store";
import { useAppDispatch } from "../../app/hooks";
import "react-toastify/dist/ReactToastify.css";
import "./listOfBooks.scss";

function ListOfBooks() {
  const storeBooks = useSelector((state: RootState) => state.books.booksList);
  const dispatch = useAppDispatch();

  const handlerAddWish = (book: Book) => {
    dispatch(addBookWish(book));
    toast("Added to wishlist!");
  };

  return (
    <div className="container-cards-listofbooks">
      {storeBooks.library.map((item) => (
        <div className="cards" key={item.book.ISBN}>
          <div className="card-header">
            <div className="cover-book">
              <img
                src={item.book.cover}
                alt={item.book.title}
                onClick={() => handlerAddWish(item.book)}
                
              />
            </div>
          </div>
          <div className="card-body">
            <h3>Title: {item.book.title}</h3>
            <h4>Author: {item.book.author.name}</h4>
            
            <div className="otherbooks">
              Other Books:
              {item.book.author.otherBooks.map((item) => (
                <h5>{item}</h5>
              ))}
            </div>
              
          </div>
        </div>
      ))}
      <ToastContainer />
    </div>
  );
}

export default ListOfBooks;
