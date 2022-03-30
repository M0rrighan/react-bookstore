import { getBooks } from './booksApi';

// ACTION TYPES
const LIST_BOOKS = 'bookStore/books/LIST_BOOKS';
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [];

// ACTION CREATORS
export const listBooks = (payload) => ({
  type: LIST_BOOKS,
  payload,
});
export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});
export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

// THUNK - MIDDLEWARE
export const loadListBooks = () => async (dispatch) => {
  const apiBooks = await getBooks();
  const books = Object.entries(apiBooks).map(([id, book]) => {
    const { category, title } = book[0];
    return {
      id,
      title,
      author: 'Unknown Author',
      category,
      progressPercent: Math.floor(Math.random() * 101),
      chapter: 'Not Updated',
    };
  });
  dispatch(listBooks(books));
};

// REDUCER
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_BOOKS:
      return [...action.payload];
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);

    default:
      return state;
  }
};

export default booksReducer;
