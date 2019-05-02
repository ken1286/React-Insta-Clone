import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import dummyData from '../../dummy-data';

class PostsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      comments: []
    }
  }

  componentDidMount() {
    this.setState({
      data: dummyData,
      comments: dummyData.map( item => {
        return item.comments
      })
    })
  }

  componentDidUpdate() {
    console.log(this.state.data);
    console.log(this.state.comments);
  }

  addComment = (input, id) => {
    this.setState({
      data: this.state.data.map( item => {
        if(item.id === id) {
          return (
          { ...item, comments: [...item.comments, {text: input, username: localStorage.getItem('user')}]}
          )
        } else {
        return item;
        }
      })
    })
  }

  searchUser = (input) => {
    this.setState({
      data: this.state.data.filter( item => {
        if(item.username === input) {
          return true;
        } else {
          return false;
        }
      })
    })
  }


  addLike = (id) => {
    this.setState({
      data: this.state.data.map( item => {
        if(item.id === id) {
          return (
            { ...item, [item.likes]: item.likes++}
          )
        } else {
          return item;
        }
      })
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar searchUser={this.searchUser} />
        <PostContainer 
          posts={this.state.data}
          addLike={this.addLike}
          addComment={this.addComment}
        />
      </div>
    )
  }
}

export default PostsPage;
