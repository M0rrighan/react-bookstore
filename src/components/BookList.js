import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { listBooks } from '../redux/books/books';
import BookItem from './BookItem';

const BookList = () => {
  const dispatch = useDispatch();
  const booksList = useSelector((state) => state.booksReducer);

  useEffect(() => {
    if (booksList.length < 1) {
      dispatch(listBooks());
    }
  }, []);

  return (
    <ul className="books-ul">
      {
        booksList.map((book) => (
          <li key={book.id}>
            <BookItem
              id={book.id}
              title={book.title}
              author={book.author}
              category={book.category}
              progressPercent={book.progressPercent}
              chapter={book.chapter}
            />
          </li>
        ))
      }
    </ul>
  );
};

export default BookList;
