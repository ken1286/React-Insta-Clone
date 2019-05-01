import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

function PostContainer(props) {

  return(
    <div className="post-wrapper">
      {props.posts.map( (post, index) => {
        return (
        <div className="whole-post" key={index}>
          <Post 
            thumbnail={post.thumbnailUrl}
            username={post.username}
            imageUrl={post.imageUrl}
            likes={post.likes}
            key={post.timestamp}
            addLike={props.addLike}
          />
          <CommentSection 
            comments={post.comments}
            addComment={props.addComment}
            id={post.id}
          />
        </div> 
        )
      })}
    </div>
  );
}

PostContainer.propTypes = {
  posts: PropTypes.array
}

export default PostContainer;