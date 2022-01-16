import { Avatar, Button, Typography } from '@mui/material';
import React, { FC } from 'react';
import { FlexWrapper, OuterWrapper, ColorWrapper } from '../../../common/';

interface IProductProps {
  data: any;
}

export const Product: FC<IProductProps> = ({ data }) => {
  console.log(data);
  return (
    // <ColorWrapper background="pink" text="blue">
    <OuterWrapper borderColor="black" borderRadius="10px" margin="10px" padding="10px">
      <FlexWrapper justify="space-between" align="center">
        <Avatar src={data.photo} sx={{ width: '50px', height: '50px' }} />
        <Typography>{data.title}</Typography>
        <Typography>{data.category.title}</Typography>
        <Typography>{data.owner.username}</Typography>
        <Typography>{data.price}$</Typography>
        <Button>Buy</Button>
      </FlexWrapper>
    </OuterWrapper>
    // </ColorWrapper>
  );
};
