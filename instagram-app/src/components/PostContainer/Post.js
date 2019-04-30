import React from 'react';
import './PostContainer.css';
import PropTypes from 'prop-types';

const Post = props => {
  return(
    <div className="main-post">
      <img 
        className="thumbnail" 
        alt="thumbnail" 
        src={props.thumbnail} 
      />
      <h2>{props.username}</h2>
      <img 
        className="main-img" 
        alt="main-img" 
        src={props.imageUrl} 
      />
      <div className="main-icons"></div>
      <p className="likes">{props.likes} Likes</p>
    </div>
  );
}

Post.propTypes = {
  thumbnail: PropTypes.string,
  username: PropTypes.string,
  imageUrl: PropTypes.string,
  likes: PropTypes.number
}

export default Post;