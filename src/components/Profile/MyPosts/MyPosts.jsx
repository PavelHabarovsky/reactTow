import React from 'react';
import Post from "./Post/Post"
import s from "./MyPosts.module.css"

const MyPosts = () => {
  return (
    <div className={s.wrapMyPosts}>
      My Posts
      <div >
        <div><textarea name="" id="" cols="10" rows="3"></textarea></div>
        <button >Add post</button>
      </div>
      <div className={s.posts}>
        <Post message={"Hi! How are you?"} likeCount={"15"}/>
        <Post message={"I`m fine"} likeCount={"20"}/>
        <Post message={"I read the book"} likeCount={"50"}/>
        <Post message={"Yo"} likeCount={"40"}/>
      </div>


    </div>
  )
}
export default MyPosts;