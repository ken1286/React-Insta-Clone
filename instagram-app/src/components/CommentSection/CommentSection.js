import React from 'react';
import Comment from './Comment';
import CommentInput from './CommentInput';
// import PropTypes from 'prop-types';
import './CommentSection.css';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // comments: this.props.comments,
      commentInput: {
        text: ''
      }
    }
  }

  handleChanges = event => {
    this.setState({
      commentInput: { 
        text: event.target.value
    }})
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addComment(this.state.commentInput.text, this.props.id);
    this.setState({
      commentInput: {text: ''}
    })
  }

  // addComment = (event, index) => {
  //   event.preventDefault();
  //   console.log(this.state);
  //   const commentsState = this.state.comments;
  //   commentsState.push(this.state.commentInput);
  //   this.setState({
  //     commentsState, 
  //     commentInput: {text: '', username: 'billy'}
  //   })
  // }

  render() {
    return (
        <div className="comment-section">
          {this.props.comments.map( (eleComment, index) => {
            return( 
            <Comment 
                key={index}
                comment={eleComment} />
            )
          })}
          <CommentInput 
            handleSubmit={this.handleSubmit}
            handleChanges={this.handleChanges}
            value={this.state.commentInput.text}
            name="text"
          />
        </div>
    )
  }
}

// CommentSection.propTypes = {
//   this.state.comments: PropTypes.arrayOf(
//     PropTypes.shape({ 
//       username: PropTypes.string,
//       text: PropTypes.string
//     })
//   )
// };

export default CommentSection;