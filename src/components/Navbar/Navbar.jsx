import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Navbar.module.css"

const Navbar = (props) => {


  let NavBar = props.appState.sideBar.NavBarData.map(DataLink => <div className={s.item}><NavLink to={DataLink.path} activeClassName={s.active}>{DataLink.nameLink}</NavLink></div>)

    return (
      <nav className={s.nav}>
        {NavBar}
    </nav>
    )}
export default Navbar;