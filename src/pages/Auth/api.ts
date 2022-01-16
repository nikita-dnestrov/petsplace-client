import axios from 'axios';

export const signIn = (data) =>
  axios({
    url: 'https://petsplace.herokuapp.com/auth/sign-in',
    method: 'POST',
    data,
    headers: {
      'Content-Type': 'application/json',
    },
  });
