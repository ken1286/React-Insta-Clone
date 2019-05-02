import React from 'react';
import Login from '../Login/Login';
import PostsPage from '../components/PostContainer/PostsPage';

const withAuthenticate = PostsPage => Login =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          loggedIn: false
        }
      }

    componentDidMount() {
      if(!localStorage.getItem('user')) {
        this.setState({ loggedIn: false});
      } else {
        this.setState({ loggedIn: true})
      }
    }

    render() {
      if(this.state.loggedIn) {
        return <PostsPage />;
      } else {
        return <Login />;
      }
    }
  }

  export default withAuthenticate;