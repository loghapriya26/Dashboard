import React from 'react';
import './Topnav.css';
import Datetime from './Datetime';
import curenet from '../Images/curenet.png';
import {FaUserAlt} from "react-icons/fa" 
import {MdNotificationsActive} from "react-icons/md";
import {BsSearch} from "react-icons/bs";

// import Profile from './ProfilePopUp';
const Topnav = () => {
    return(
        <div class="topnav">
          <img class="curenet-image" src={curenet} alt="curenet"/>
          
            <BsSearch className="Search-icon" /><input type="text" className="Search-Bar" placeholder="Search" />
          
          <div class="topnav-right">
            <div className="datetime">
              <Datetime/>
              </div>
              
              <MdNotificationsActive className="notify-user-icon"/>
              {/* <Profile /> */}
              <FaUserAlt className="notify-user-icon"/>
               
          </div>
        </div>
        );
}

export default Topnav;