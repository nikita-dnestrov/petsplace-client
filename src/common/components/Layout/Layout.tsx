import React, { FC } from 'react';
import { TopBar } from './TopBar';

export const Layout: FC = ({ children }) => {
  return (
    <div>
      <TopBar />
      {children}
    </div>
  );
};
