import React from 'react';
import MyPosts from "./MyPosts/MyPosts"
import s from "./Profile.module.css"

const Profile = () => {
  return (
    <div className={s.profile}>
      <div>
        <div />
        <img alt="photosea" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQSRJGVv5e7U6ZfuKsTm6dNLsmVAdkfVUTg6Q&usqp=CAU" /></div>
        <MyPosts/>
    </div>
  )
}
export default Profile;