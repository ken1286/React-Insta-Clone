import React from 'react';


class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleLoginSubmit = event => {
    const user = this.state.username;
    localStorage.setItem('user', user);
    window.location.reload();
  }

  render() {
    return (
      <form className="login">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={this.state.username}
          onChange={this.handleInputChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <button 
          onClick={this.handleLoginSubmit}>
          Log In
        </button>
      </form>
    )
  }
}

export default Login;