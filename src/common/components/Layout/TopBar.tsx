import React, { FC, useState } from 'react';
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  SwipeableDrawer,
  ListItem,
  ListItemText,
  List,
} from '@mui/material';
import { Inbox, Mail, Menu } from '@mui/icons-material';
import { StyledDivider } from '../..';
import { useNavigate } from 'react-router-dom';

export const TopBar: FC = ({}) => {
  const [openBar, setOpenBar] = useState(false);

  const navigate = useNavigate();

  const transport = (to: string) => {
    navigate(to);
    setOpenBar(false);
  };

  const list = (
    <>
      <ListItem button key="Profile">
        <ListItemText onClick={() => transport('/profile')} primary="Profile" />
      </ListItem>
      <ListItem onClick={() => transport('/products')} button key="Products">
        <ListItemText primary="Products" />
      </ListItem>
      <ListItem onClick={() => transport('/test')} button key="Test">
        <ListItemText primary="Test" />
      </ListItem>
    </>
  );

  return (
    <div>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setOpenBar(!openBar)}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PetsPlace
          </Typography>
          <Button color="inherit">Profile</Button>
        </Toolbar>
      </AppBar>
      <StyledDivider height="65px" />
      <SwipeableDrawer
        open={openBar}
        onClose={() => setOpenBar(false)}
        onOpen={() => setOpenBar(true)}
      >
        <StyledDivider height="60px" />
        <List>{list}</List>
      </SwipeableDrawer>
    </div>
  );
};
