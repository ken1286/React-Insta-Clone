import React from 'react';
import PropTypes from 'prop-types';

//username comment

// comments: [
//     {
//       username: "playhearthstone",
//       text: "Love this shot!"
//     },
//     {]

const Comment = props => {

  return (
    <div className='comment'>
    <p> <strong>{props.comment.username}</strong> {props.comment.text}</p> 
    </div>
    );
}

Comment.propTypes = {
      comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
      })
    };


export default Comment;