import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Dialogs.module.css";

let dialogData = [
  {id: 1, name: "Damach"},
]

const DialogsItem = (props) => {
  return (
    <div className={s.dialog + " " + s.active}>
            <NavLink to={"/dialog/" + props.id}>{props.name}</NavLink>
          </div>
  )
};

const Message = (props) => {
  return (
    <div className={s.massage}>{props.message}</div>
  )
}


const Dialogs = () => {
  return (
    <div className={s.wrap_dialogs}>
      <div className={s.dialogs}>
        <div className={s.dialogsItem}>
         <DialogsItem id="1" name="Damach"/>
         <DialogsItem id="2" name="Andrey"/>
         <DialogsItem id="3" name="Sveta"/>
         <DialogsItem id="4" name="Sasha"/>
         <DialogsItem id="5" name="Vasya"/>
         <DialogsItem id="6" name="Voava"/>
        </div>

      </div>
      <div className={s.masseges}>
        <Message message="Hi" />
        <Message message="I`m a hero" />
        <Message message="What a fack" />
      </div>

    </div>
  )
}
export default Dialogs;