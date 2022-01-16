import { Avatar } from '@mui/material';
import React, { FC, useState } from 'react';
import { useQuery } from 'react-query';
import { getProducts } from './api';
import { Product } from './components/Product';

export const Main: FC = ({}) => {
  const [products, setProducts] = useState<any[]>([]);

  const { data } = useQuery('user', () => getProducts(localStorage.getItem('token')), {
    onSuccess: ({ data }) => {
      setProducts(data);
    },
  });

  const productsList = products.map((m) => {
    return <Product data={m} />;
  });

  return <div>{productsList}</div>;
};
