import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const status = useSelector((state) => state.categoriesReducer);
  const dispatch = useDispatch();
  const checkPageStatus = () => {
    dispatch(checkStatus());
  };
  return (
    <div>
      <button
        type="button"
        onClick={checkPageStatus}
      >
        Check status
      </button>
      <div>
        {status || ''}
      </div>
    </div>
  );
};

export default Categories;
