import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Navbar.module.css"

const Navbar = () => {
    return (
      <nav className={s.nav}>
      <div className={s.item}><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></div>
      <div className={s.item}><NavLink to="/dialog" activeClassName={s.active}>Massege</NavLink></div>
      <div className={s.item}><NavLink to="#" >News</NavLink></div>
      <div className={s.item}><NavLink to="/music" activeClassName={s.active}>Music</NavLink></div>
      <div className={s.item}><NavLink to="#" >Settings</NavLink></div>
      
    </nav>
    )}
export default Navbar;