import React, { FC, useCallback, useState } from 'react';
import { Avatar, Box } from '@mui/material';
import axios from 'axios';
import { useQuery } from 'react-query';
import { StyledDivider } from '../../common';
import { getUser } from './api';

export const Profile: FC = ({}) => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    products: [],
    status: '',
    avatar: '',
  });

  const [file, setFile] = useState<any>(null);

  const [res, setRes] = useState<any>(null);

  const { data } = useQuery('user', () => getUser(localStorage.getItem('token')), {
    onSuccess: ({ data }) => {
      const { username, email, products, status } = data;
      const resAvatar = data.avatar ? data.avatar : '';
      setUser({ username, email, products, status, avatar: resAvatar });
    },
  });

  const handleFile = (e: any) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = useCallback(async () => {
    const data = new FormData();
    //@ts-ignore
    data.append('file', file);
    const kek = await axios({
      method: 'PUT',
      url: 'https://petsplace.herokuapp.com/user/avatar',
      headers: {
        'Content-Type': 'form-data',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      data,
    });

    setRes(kek);
  }, [file]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'right',
        alignItems: 'center',
      }}
    >
      <Avatar src={user.avatar} sx={{ width: '100px', height: '100px' }} />
      <StyledDivider height="20px" />
      <div>
        <div>Username: {user.username}</div>
        <div>Email: {user.email}</div>
      </div>
      {/* //@ts-ignore */}
      <input onChange={(e) => handleFile(e)} type="file" />
      <button onClick={() => handleUpload()}>kek</button>
      {/* <button onClick={() => console.log(res)}>hek</button> */}
    </Box>
  );
};
