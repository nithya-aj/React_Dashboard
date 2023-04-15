import React from 'react'
import { IoMdNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import './topNav.css'

const TopNav = () => {
  return (
    <div className="top__nav">
      <div className="top__nav_wrapper">
        <div className="top__nav_right">
          <span className="notification">
            <IoMdNotifications />
          </span>
          <span className="profile">
            <FaUserCircle />
          </span>
        </div>
      </div>
    </div>
  )
}

export default TopNav