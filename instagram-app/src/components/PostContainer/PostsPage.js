import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import dummyData from '../../dummy-data';

class PostsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      comments: [],
      filteredPosts: [],
      searched: false
    }
  }

  componentDidMount() {
    this.setState({
      data: dummyData,
      comments: dummyData.map( item => item.comments),
      filteredPosts: [],
      searched: false
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

  searchUser = input => {
    console.log(input);
    const posts = this.state.data.filter( item => {
      if(item.username.includes(input.toLowerCase())) {
        return item;
      }
    })

    let search = false;
    if(input.length > 0) {
      search = true;
    }

    this.setState({
      filteredPosts: posts,
      searched: search
    }
    )
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
          posts={this.state.searched === true
            ? this.state.filteredPosts
            : this.state.data
          }
          addLike={this.addLike}
          addComment={this.addComment}
        />
      </div>
    )
  }
}

export default PostsPage;
