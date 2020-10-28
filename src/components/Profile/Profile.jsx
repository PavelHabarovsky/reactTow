import React from 'react';
import MyPosts from "./MyPosts/MyPosts"
import s from "./Profile.module.css"
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
   
    <div className={s.profile}>
      <ProfileInfo />
      <MyPosts postsPage={props.appState.postsPage} addPost={props.addPost}/>
    </div>
  )
}
export default Profile;