import React from 'react';
import './CommentSection.css';

const CommentInput = props => {
  return(
    <form className="comment-input" onSubmit={props.addTodo}>
        <input 
          className="comment-input-bar"
          placeholder="Add a comment..."
          value={props.value}
          name={props.name}
          />
    </form>
  );
}

export default CommentInput;