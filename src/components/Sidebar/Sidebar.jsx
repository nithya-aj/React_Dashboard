import React from 'react'
import './sidebar.css'
import { GoDashboard } from "react-icons/go";
import { AiFillHome } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h2><span><GoDashboard /></span> Dashboard</h2>
      </div>
      <div className="sidebar__content">
        <div className="menu">
          <ul className="nav__list">
            <li className="nav__item nav__link nav__active"><span><AiFillHome /></span>Home</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar