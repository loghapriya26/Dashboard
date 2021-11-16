import React from 'react';
import'./Sidenav.css';

import {RiArrowDropDownLine} from "react-icons/ri";
import Dashboard  from "../Images/Dashboard.png";
import Departments from "../Images/Departments.png";
import Doctor from "../Images/Doctor.png";
import {MdPayment} from "react-icons/md";
import {FaWheelchair} from "react-icons/fa";
import {MdHelp} from "react-icons/md";
import {GiStethoscope} from "react-icons/gi";
import {FaPencilAlt} from "react-icons/fa";

const Sidenav = () => {
    return(
      <>
        <div className="sidenav">
        <div class="dropdown">
            <button class="dropbtn">--Facility--
            <RiArrowDropDownLine/>
            </button>
          <div class="dropdown-content">
            <a href="#Link1">Link 1</a>
            <a href="#Link2">Link 2</a>
            <a href="#Link3">Link 3</a>
          </div>
       </div> 
        <h2>MEDICINE</h2>
        <a href="#Dashboard"><img class="Sidenav-icons" src={Dashboard} alt="Dashboard"/>Dashboard</a>
        <a href="#Appointments"><GiStethoscope class="Sidenav-icons"/>Appointments</a>
        <a href="#Doctors"><img class="Sidenav-icons" src={Doctor} alt="Doctor"/>Doctors</a>
        <a href="#Departments"><img class="Sidenav-icons" src={Departments} alt="Departments"/>Departments</a>
        { <a href="#Patients"><FaWheelchair class="Sidenav-icons"/>Patients</a>}
        <a href="#Payments"><MdPayment class="Sidenav-icons"/>Payments</a>
        <a href="#Help"><MdHelp class="Sidenav-icons"/>Help</a>
        <hr className="LineStyle" />
        <div className="float-bottom-menu">      
          <a href= "#EditProfile"><FaPencilAlt class="Sidenav-icons"/>Edit Profile</a>
          <a href= "#EditFacility"><FaPencilAlt class="Sidenav-icons"/>Edit Facility</a>
      </div>
      </div>
      
    </>
    );
}
export default Sidenav;