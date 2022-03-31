const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const apiKey = 'EwswTcYuzU4aOuTDDUU0';

export const getBooks = async () => {
  const response = await fetch(`${baseUrl}/apps/${apiKey}/books`);
  const result = await response.json();
  return result;
};

export const apiPostBook = async (book) => {
  const response = await fetch(`${baseUrl}/apps/${apiKey}/books`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(book),
  });
  return response;
};

export const apiDeleteBook = async (id) => {
  const response = await fetch(`${baseUrl}/apps/${apiKey}/books/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });
  return response;
};
