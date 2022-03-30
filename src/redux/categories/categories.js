const CHECK_STATUS = 'bookStore/categories/CHECK_STATUS';

const initialState = [];

export const checkStatus = (payload) => ({
  type: CHECK_STATUS,
  payload,
});

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';

    default:
      return state;
  }
};

export default categoriesReducer;
