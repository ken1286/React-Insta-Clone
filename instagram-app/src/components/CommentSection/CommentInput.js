import React from 'react';
import './CommentSection.css';

const CommentInput = props => {
  return(
    <form className="comment-input" onSubmit={props.handleSubmit}>
        <input 
          className="comment-input-bar"
          placeholder="Add a comment..."
          onChange={props.handleChanges}
          value={props.value}
          name={props.name}
          />
    </form>
  );
}

export default CommentInput;