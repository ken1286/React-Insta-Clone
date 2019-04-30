import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

function PostContainer(props) {
  return(
    <div className="post-wrapper">
      {props.posts.map( post => {
        return (
        <div className="one-post">
          <img className="thumbnail" alt="thumbnail" src={post.thumbnailUrl} />
          <h2>{post.username}</h2>
          <img className="main-img" alt="main-img" src={post.imageUrl} />
          <div className="main-icons"></div>
          <p className="likes">{post.likes} Likes</p>
          <CommentSection comments={post.comments}/>
        </div> )
      })}
    </div>
  );
}

export default PostContainer;