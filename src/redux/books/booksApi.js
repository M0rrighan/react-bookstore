/* eslint-disable import/prefer-default-export */
const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const apiKey = 'EwswTcYuzU4aOuTDDUU0';

export const getBooks = async () => {
  const response = await fetch(`${baseUrl}/apps/${apiKey}/books`);
  const result = response.json();
  return result;
};
