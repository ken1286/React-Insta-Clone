import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

class App extends React.Component {
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
          { ...item, comments: [...item.comments, {text: input, username: 'bob'}]}
          )
      } else {
        return item;
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
        <SearchBar />
        <PostContainer 
          posts={this.state.data}
          addLike={this.addLike}
          addComment={this.addComment}
        />
      </div>
    )
  }
}

export default App;
