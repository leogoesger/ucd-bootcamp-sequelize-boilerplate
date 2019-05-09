import React, { Component } from 'react';

import API from '../utils/API';
// // import { Link } from 'react-router-dom';
// import RandomHomeComponent from '../components/RandomHomeComponent';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  // componentDidMount() {
  //   this.loadPosts();
  // }

  // loadPosts = () => {
  //   API.getPosts()
  //     .then(res =>
  //       this.setState({ posts: res.data, title: '', author: '', synopsis: '' })
  //     )
  //     .catch(err => console.log(err));
  // };

  onChange = key => e => this.setState({ [key]: e.target.value });

  onClick = () => alert(this.state);

  render() {
    return (
      <div>
        <h1>Login</h1>
        <input
          type="text"
          value={this.state.email}
          label="email"
          onChange={this.onChange('email')}
        />
        <input
          type="password"
          value={this.state.password}
          label="password"
          onChange={this.onChange('password')}
        />
        <button onClick={this.onClick}>Login</button>
      </div>
    );
  }
}

export default Login;
