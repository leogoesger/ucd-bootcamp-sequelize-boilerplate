import React, { Component, useContext } from 'react';
import { Link } from 'react-router-dom';

import API from '../utils/API';
// import { Link } from 'react-router-dom';
import RandomHomeComponent from '../components/RandomHomeComponent';
import { Context } from '../context';

const Home = () => {
  const {
    state: { currentUser },
  } = useContext(Context);

  return <div>{JSON.stringify(currentUser)}</div>;
};

export default Home;
