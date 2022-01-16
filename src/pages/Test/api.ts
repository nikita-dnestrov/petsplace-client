import axios from 'axios';

export const getCategories = (auth) =>
  axios({
    url: 'https://petsplace.herokuapp.com/category',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth}`,
    },
  });

export const createCategory = (data, auth) =>
  axios({
    url: 'https://petsplace.herokuapp.com/category',
    method: 'POST',
    data,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth}`,
    },
  });

export const deleteCategory = (id, auth) =>
  axios({
    url: `https://petsplace.herokuapp.com/category/${id}/hard`,
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth}`,
    },
  });
