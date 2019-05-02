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

  render() {
    return (
      <Form className="login-form">
        <h1>Login</h1>
        <Input
          type="text"
          placeholder="username"
          name="username"
          value={this.state.username}
          onChange={this.handleInputChange}
        />
        <Input
          type="password"
          placeholder="password"
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <Button 
          onClick={this.handleLoginSubmit}>
          Log In
        </Button>
      </Form>
    )
  }
}

export default Login;