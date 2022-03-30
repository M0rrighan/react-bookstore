const CHECK_STATUS = 'bookStore/categories/CHECK_STATUS';

const initialState = [];

export const checkStatus = (payload) => ({
  type: CHECK_STATUS,
  payload,
});
