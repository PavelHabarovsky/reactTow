import React from 'react';
import Post from "./Post/Post"
import s from "./MyPosts.module.css"

const MyPosts = (props) => {

  let posts = props.postsData.map(dialog => <Post message={dialog.message} likeCount={dialog.likeCount} />);
  
  return (
    <div className={s.wrapMyPosts}>
      <h3>My Posts</h3>
      <div >
        <div><textarea name="" id="" cols="10" rows="3"></textarea></div>
        <button >Add post</button>
      </div>
      <div className={s.posts}>
      {posts}
      </div>


    </div>
  )
}
export default MyPosts;