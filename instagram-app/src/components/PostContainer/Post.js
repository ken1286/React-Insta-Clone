import React from 'react';
import './PostContainer.css';
import PropTypes from 'prop-types';

function Post(props) {

  const handleClick = event => {
    event.preventDefault();
    props.addLike(props.id);
  }

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
      <i className="far fa-heart" onClick={handleClick} />
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