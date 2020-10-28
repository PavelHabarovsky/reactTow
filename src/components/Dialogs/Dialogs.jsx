import React from 'react';
import s from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Messages from "./Messages/Messages";





const Dialogs = (props) => {

  let dialogsElements = props.appState.dialogsPage.dialogsData.map(dialog => <DialogsItem id={dialog.id} name={dialog.name} />);
  let messagesElements = props.appState.dialogsPage.messagesData.map(message => <Messages message={message.message} />);
  let textUser = React.createRef();
  let addPost = () => {
    let text = textUser.current.value;
    console.log(textUser);
    alert(text);


  };
  return (
    <div className={s.wrap_dialogs}>
      <div className={s.dialogs}>
        <div className={s.dialogsItem}>
          {dialogsElements}
        </div>

      </div>
      <div className={s.masseges}>
        {messagesElements}
      </div>
      <div>
        <div><textarea ref={textUser} name="" id="" cols="10" rows="3"></textarea></div>
        <button onClick={addPost} >Add post</button>
      </div>
    </div>
  )
}
export default Dialogs;