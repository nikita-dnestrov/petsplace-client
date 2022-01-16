import { Button, TextField } from '@mui/material';
import React, { FC, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { inputHandler } from '../../helpers/inputHandler';
import { createCategory, deleteCategory, getCategories } from './api';
import { useToken } from '../../helpers';
import { FlexWrapper, OuterWrapper, StyledDivider } from '../../common';

export const Test: FC = ({}) => {
  const [categories, setCategories] = useState<any[]>([]);
  const [categoryForm, setCategoryForm] = useState<any>({ title: '' });

  const token = useToken();

  const categoryQuery = useQuery('categories', () => getCategories(token), {
    onSuccess: ({ data }) => {
      setCategories(data);
    },
  });

  const categoryCreateMutation = useMutation(
    (data: any) => {
      return createCategory(data, token);
    },
    { onSuccess: () => getCategories(token).then(({ data }) => setCategories(data)) }
  );

  const categoryDeleteMutation = useMutation(
    (id: any) => {
      return deleteCategory(id, token);
    },
    { onSuccess: () => getCategories(token).then(({ data }) => setCategories(data)) }
  );

  const categoryList = (
    <div style={{ width: '100%' }}>
      <OuterWrapper borderColor="black">
        <FlexWrapper wrap="no-wrap" direction="column">
          {categories.map((m) => {
            return (
              <FlexWrapper justify="space-between" align="center" style={{ width: '100%' }}>
                <div>{m.title}</div>
                <Button onClick={() => categoryDeleteMutation.mutate(m._id)}>Delete</Button>
              </FlexWrapper>
            );
          })}
        </FlexWrapper>
      </OuterWrapper>
    </div>
  );

  return (
    <OuterWrapper padding="10px">
      <FlexWrapper direction="column">
        <div>Categories</div>
        {categoryList}
      </FlexWrapper>
      <FlexWrapper direction="column" align="center">
        <TextField
          id="title"
          label="Title"
          variant="standard"
          color="primary"
          value={categoryForm.title}
          onChange={(e) => inputHandler(e, setCategoryForm)}
          fullWidth
        />
        <StyledDivider height="10px" />
        <Button
          onClick={() => categoryCreateMutation.mutate({ title: categoryForm.title })}
          variant="contained"
        >
          Add Category
        </Button>
      </FlexWrapper>
    </OuterWrapper>
  );
};
