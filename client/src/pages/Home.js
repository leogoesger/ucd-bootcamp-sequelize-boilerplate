import React, { Component } from 'react';

import API from '../utils/API';
// import { Link } from 'react-router-dom';
import RandomHomeComponent from '../components/RandomHomeComponent';

class Home extends Component {
  state = {
    posts: [],
    title: '',
    author: '',
    synopsis: '',
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = () => {
    API.getPosts()
      .then(res =>
        this.setState({ posts: res.data, title: '', author: '', synopsis: '' })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        {JSON.stringify(this.state.posts)}
        <RandomHomeComponent />
      </div>
    );
  }
}

export default Home;
