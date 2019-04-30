import React from 'react';
import Comment from './Comment';
import CommentInput from './CommentInput';
import PropTypes from 'prop-types';
import './CommentSection.css';

const CommentSection = props => {

  return (
      <div className="comment-section">
        {props.comments.map( (eleComment, index) => {
           return( <Comment 
              key={index}
              comment={eleComment} />
           )
        })}
        <CommentInput />
      </div>
  )
}

CommentSection.propTypes = {
  comments: PropTypes.array
};

export default CommentSection;