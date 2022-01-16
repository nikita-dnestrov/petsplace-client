import React, { FC, useState } from 'react';
import { useMutation } from 'react-query';
import { Button, Container, Switch, TextField } from '@mui/material';

import { signIn } from './api';
import { inputHandler } from '../../helpers/inputHandler';
import { CenterContainer, StyledButton, StyledDivider } from '../../common';

export const Auth: FC = ({}) => {
  const [signUpForm, setSignUpForm] = useState({ email: '', password: '', username: '' });

  const [signInForm, setSignInForm] = useState({ email: '', password: '' });

  const [type, setType] = useState<'signin' | 'signup'>('signin');

  const signInMutation = useMutation(
    (data: any) => {
      return signIn(data);
    },
    { onSuccess: (data) => localStorage.setItem('token', data.data.token) }
  );

  const signInComponent = (
    <Container>
      <TextField
        id="email"
        label="Email"
        variant="standard"
        color="primary"
        value={signInForm.email}
        onChange={(e) => inputHandler(e, setSignInForm)}
        fullWidth
      />
      <TextField
        id="password"
        label="Password"
        variant="standard"
        color="primary"
        value={signInForm.password}
        onChange={(e) => inputHandler(e, setSignInForm)}
        fullWidth
      />
      <StyledDivider height="20px" />
      <CenterContainer>
        <StyledButton onClick={() => signInMutation.mutate(signInForm)} variant="contained">
          Sign-in
        </StyledButton>

        <StyledDivider height="20px" />

        <StyledButton onClick={() => setType('signup')} variant="contained">
          Sign-up
        </StyledButton>
      </CenterContainer>
    </Container>
  );

  const signUpComponent = (
    <Container>
      <TextField
        id="username"
        label="Username"
        variant="standard"
        color="primary"
        onChange={(e) => inputHandler(e, setSignUpForm)}
        fullWidth
      />
      <TextField
        id="email"
        label="Email"
        variant="standard"
        color="primary"
        onChange={(e) => inputHandler(e, setSignUpForm)}
        fullWidth
      />
      <TextField
        id="password"
        label="Password"
        variant="standard"
        color="primary"
        onChange={(e) => inputHandler(e, setSignUpForm)}
        fullWidth
      />
      <StyledDivider height="20px" />
      <CenterContainer>
        <StyledButton variant="contained">Sign-up</StyledButton>

        <StyledDivider height="20px" />

        <StyledButton onClick={() => setType('signin')} variant="contained">
          Sign-in
        </StyledButton>
      </CenterContainer>
    </Container>
  );

  return <>{type === 'signin' ? signInComponent : signUpComponent}</>;
};
