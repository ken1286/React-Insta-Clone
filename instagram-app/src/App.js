import React from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';
import withAuthenticate from './authentication/withAuthenticate';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)

class App extends React.Component {

  render() {
    return (
      <ComponentFromWithAuthenticate />
    )
  }
}

export default App;
