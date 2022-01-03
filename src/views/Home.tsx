import React, { FC, } from 'react';
import { isAuthenticated } from '../utils/auth';
import {  Redirect } from 'react-router-dom';

export const Home: FC = () => {
  
  return (
    <>
      {isAuthenticated() ? (
        <>
          <Redirect to="/admin" />
        </>
      ) : (
        <>
          <Redirect to="/admin" />
        </>
      )}
    </>
  );
};
