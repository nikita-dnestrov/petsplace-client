import axios from 'axios';

export const getProducts = (data) =>
  axios({
    url: 'https://petsplace.herokuapp.com/product',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${data}`,
    },
  });
