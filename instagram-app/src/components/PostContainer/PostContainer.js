import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import styled from 'styled-components'

const PostWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 90%;
  margin: 0 auto;
  margin-top: 3%;
  border: 2px dashed black;
`;

function PostContainer(props) {

  return(
    <>
      {props.posts.map( (post, index) => {
        return (
        <PostWrapper key={index}>
          <Post 
            thumbnail={post.thumbnailUrl}
            username={post.username}
            imageUrl={post.imageUrl}
            likes={post.likes}
            key={post.timestamp}
            addLike={props.addLike}
            data={post}
            id={post.id}
          />
          <CommentSection 
            comments={post.comments}
            addComment={props.addComment}
            id={post.id}
          />
        </PostWrapper>
        )
      })}
    </>
  );
}

PostContainer.propTypes = {
  posts: PropTypes.array
}

export default PostContainer;