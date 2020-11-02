import React from 'react';
import Post from "./Post/Post"
import s from "./MyPosts.module.css"

const MyPosts = (props) => {
  //debugger;
  let userText = React.createRef();
  let posts = props.postsPage.postsData.map(dialog => <Post message={dialog.message} likeCount={dialog.likeCount} />);
  let addPost = () => {
    props.addPost();
  }
  let onUserText = () => {
    let text = userText.current.value;
    props.onUserText(text);
  }
  return (
    
    <div className={s.wrapMyPosts}>
      <h3>My Posts</h3>
      <div >
        <div><textarea onChange={onUserText} ref={userText} value={props.postsPage.currentUserText} name="" id="" cols="10" rows="3"></textarea></div>
        <button onClick={addPost} >Add post</button>
      </div>
      <div className={s.posts}>
      {posts}
      </div>


    </div>
  )
}
export default MyPosts;