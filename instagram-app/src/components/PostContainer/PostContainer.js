import React from 'react';
import Post from './Post';
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
          />
          <CommentSection comments={post.comments}/>
        </div> 
        )
      })}
    </div>
  );
}

export default PostContainer;