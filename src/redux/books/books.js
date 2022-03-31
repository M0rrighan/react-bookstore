import { getBooks, apiPostBook, apiDeleteBook } from './booksApi';

// ACTION TYPES
const LIST_BOOKS = 'bookStore/books/LIST_BOOKS';
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [];

// ACTION CREATORS
// THUNK - MIDDLEWARE
export const listBooks = () => async (dispatch) => {
  const apiBooks = await getBooks();
  const books = Object.entries(apiBooks).map(([id, book]) => {
    const { title, author, category } = book[0];
    return {
      id,
      title,
      author,
      category,
      progressPercent: Math.floor(Math.random() * 101),
      chapter: 'Not Updated',
    };
  });
  dispatch({
    type: LIST_BOOKS,
    payload: books,
  });
};

export const addBook = (payload) => (dispatch) => {
  const {
    id, title, author, category,
  } = payload;
  const bookToPost = {
    item_id: id,
    title,
    author,
    category,
  };
  apiPostBook(bookToPost);
  dispatch({
    type: ADD_BOOK,
    payload,
  });
};

export const removeBook = (payload) => (dispatch) => {
  apiDeleteBook(payload);
  dispatch({
    type: REMOVE_BOOK,
    payload,
  });
};

// REDUCER
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_BOOKS:
      return [...action.payload];
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);

    default:
      return state;
  }
};

export default booksReducer;
