import React, {useState} from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title, remove}) => {

  return (
      <div>
        <h1 style={{textAlign: "center", fontSize: 32}}>{title}</h1>

        {posts.map((post, index) =>
            <PostItem remove={remove} number={index + 1} post = {post} key={post.id}/>
        )}
      </div>
  );
};

export default PostList;