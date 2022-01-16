import axios from 'axios';

export const getUser = (data) =>
  axios({
    url: 'https://petsplace.herokuapp.com/user/profile',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${data}`,
    },
  });
