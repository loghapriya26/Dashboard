import './App.css';
import Datetime from './components/Datetime';
import Dropdown from './Images/dropdown.png';
import Delete from './Images/delete.png';
import Edit from './Images/edit.png';
import curenet from './Images/curenet.png';
import user from './Images/user.jpg';

// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {fascaret-down} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <div class="topnav">
          <img class="curenet-image" src={curenet} alt="curenet"/>
          <div class="topnav-right">
            <div className="datetime">
              <Datetime/></div>
            <div class="user">
              <a href="#about"><img src={user} alt="user"/></a>
            </div>
          </div>
        </div>

      <div className="sidenav">
        <div class="dropdown">
       
            <button class="dropbtn">--Facility--
            {/* <FontAwesomeIcon icon={fascaret-down} /> */}
            {/* <i class="fas fa-chevron-circle-down">f13a</i> */}
            <img src={Dropdown} alt="Dropdown"/>
              <i class="fa fa-caret-down"></i>
            </button>
          <div class="dropdown-content">
            <a href="#Link1">Link 1</a>
            <a href="#Link2">Link 2</a>
            <a href="#Link3">Link 3</a>
          </div>
       </div> 
        <h2>MEDICINE</h2>
        <a href="#Appointments">Appointments</a>
        <a href="#Doctors">Doctors</a>
        <a href="#Departments">Departments</a>
        <a href="#Patients">Patients</a>
        <a href="#Payments">Payments</a>
        <hr className="LineStyle" />
      </div>
    <div className="Container">
      <div className="list-elements">
          <h2>Appointments</h2>
          <table class="appointments-list">
              <thead className="List-Header">
                  <th>Name</th>
                  <th>Email</th>
                  <th>Date</th>
                  <th>Visit Time</th>
                  <th>Doctor</th>
                  <th>Conditions</th>
                  <th></th>
              </thead>
              <tbody className="List-body">
                  <td>Priya</td>
                  <td>priya@gmail.com</td>
                  <td>12/10/2021</td>
                  <td>6:30 PM</td>
                  <td>Dr. George</td>
                  <td>Fever</td>
                  <td><img src={Edit} alt="Edit"/> <img src={Delete}alt="Delete"/></td>   
              </tbody>
          </table>
      </div>
    </div>
    </>
  );
}

export default App;
