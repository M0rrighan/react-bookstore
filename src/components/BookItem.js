import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import './bookItem.css';

const BookItem = (props) => {
  const dispatch = useDispatch();
  const {
    id, title, author, category, progressPercent, chapter,
  } = props;

  const removeBookFromStore = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className="flex book-item">
      <div className="flex f-col left">
        <div className="flex f-col">
          <div className="text-style-2 book-category">
            {category}
          </div>
          <div className="book-title">
            {title}
          </div>
          <div className="book-author">
            {author}
          </div>
        </div>
        <ul className="flex interactions">
          <li>Comments</li>
          <li>
            <button type="button" onClick={removeBookFromStore}>Remove</button>
          </li>
          <li>Edit</li>
        </ul>
      </div>
      <div className="flex book-progress">
        <CircularProgressbar
          className="circular-progressbar"
          value={progressPercent}
        />
        <div>
          <p className="percent-num">
            {progressPercent}
            %
          </p>
          <p className="percent-txt">completed</p>
        </div>
      </div>
      <div className="book-chapter">
        <p className="upper chapter-title">Current Chapter</p>
        <p className="chapter-name">{chapter}</p>
        <button type="button" className="upper">Update Progress</button>
      </div>
    </div>
  );
};

BookItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  progressPercent: PropTypes.number.isRequired,
  chapter: PropTypes.string.isRequired,
};

export default BookItem;
