import React, { FC } from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import { Layout } from '../common';
import { Auth, Main, Profile, Test } from '../pages';

const Router: FC = ({}) => {
  return (
    <Routes>
      <Route
        path="auth"
        element={
          <Layout>
            <Auth />
          </Layout>
        }
      />
      <Route
        path="profile"
        element={
          <Layout>
            <Profile />
          </Layout>
        }
      />
      <Route
        path="products"
        element={
          <Layout>
            <Main />
          </Layout>
        }
      />
      <Route
        path="test"
        element={
          <Layout>
            <Test />
          </Layout>
        }
      />
    </Routes>
  );
};

export default Router;
