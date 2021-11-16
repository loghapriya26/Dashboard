import React, { Component } from "react";  
import "./style.css" ; 
import PropTypes from 'prop-types';  
import { getUser, addUser, editUser, deleteUser } from './redux/action.js';  
import { connect } from 'react-redux';  
import Topnav from "./Components/Topnav/Topnav.js";
import Sidenav from "./Components/Sidenav/Sidenav";
import {BsThreeDotsVertical} from 'react-icons/bs';
import {GrEdit} from "react-icons/gr";
import {RiDeleteBinLine} from "react-icons/ri";
import StatusBadges from "./Components/StatusBadges/StatusBadges.js";

class App extends Component {  
  constructor(props) {  
    super(props);  
    this.state = {  
      id: 0,  
      name: "",  
      email: "" ,
      date: "",
      visitTime:"",
      doctor: "",
      condition:""
    };  
  }  
  
  static propTypes = {  
    users: PropTypes.array.isRequired,  
    getUser: PropTypes.func.isRequired,  
    addUser: PropTypes.func.isRequired,  
    editUser: PropTypes.func.isRequired,  
    deleteUser: PropTypes.func.isRequired  
  };  
  
  componentDidMount() {  
    this.props.getUser();  
  }  
  
  submitData = () => {  
    if (this.state.name && this.state.email && this.state.date && this.state.visitTime && this.state.doctor && this.state.condition && !this.state.id) {  
      const newUser = {  
        id: Math.floor(Math.random() * (999 - 100 + 1) + 100),  
        name: this.state.name,  
        email: this.state.email,
        date: this.state.date,  
        visitTime: this.state.visitTime,  
        doctor: this.state.doctor,    
        condition: this.state.condition,
      };  
  
      this.props.addUser(newUser);  
    } else if (this.state.name && this.state.email && this.state.date && this.state.visitTime && this.state.doctor && this.state.condition && this.state.id) {  
      const updatedDetails = {  
        id: this.state.id,  
        name: this.state.name,  
        email: this.state.email,  
        date: this.state.date,
        visitTime: this.state.visitTime,
        doctor: this.state.doctor,
        condition: this.state.condition,
      };  
  
      this.props.editUser(updatedDetails);  
    } else {  
      alert('Enter User Details.');  
    }  
  
    this.clearData();  
  }  
  
  editDetails = (data) => {  
    this.setState({  
      id: data.id,  
      name: data.name,  
      email: data.email,
      date: data.date,
      visitTime: data.visitTime,
      doctor: data.doctor,
      condition: data.condition
    })  
  }  
  
  deleteUser = (id) => {  
    this.clearData();  
    if (window.confirm("Are you sure?")) {  
      this.props.deleteUser(id);  
    }  
  }  
  
  handleFirstNameChange = (e) => {  
    this.setState({  
      name: e.target.value  
    });  
  }  
  
  handleLastNameChange = (e) => {  
    this.setState({  
      email: e.target.value  
    });  
  }  

  handlephoneNumberChange = (e) => {  
    this.setState({  
      date: e.target.value  
    });  
  } 

  handlephoneNumberChange = (e) => {  
    this.setState({  
      visitTime: e.target.value  
    });  
  }
  handlephoneNumberChange = (e) => {  
    this.setState({  
      doctor: e.target.value  
    });  
  }
  handlephoneNumberChange = (e) => {  
    this.setState({  
      condition: e.target.value  
    });  
  }
  
  clearData = () => {  
    this.setState({  
      id: 0,  
      name: "",  
      email: "",
      date: "",
      visitTime: "",
      doctor: "",
      condition: "" 
    });  
  }  
  
  render() {  
    return ( 
      <>
        <Topnav/>
        <Sidenav/>
        <div className="Container">
        <h2>Appointments</h2>
            <StatusBadges/>
          <div className="list-elements">
              
              <table class="appointments-list">
                <thead className="List-Header">
                  <td>S.no</td>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Date</th>
                  <th>Visit Time</th>
                  <th>Doctor</th>
                  <th>Conditions</th>
                  <th></th>
                </thead>  
                <tbody className="List-body">  
                  {this.props.users && this.props.users.map((data, index) => {  
                    return <tr key={(index + 1)}>  
                      <td>{(index + 1)}</td>  
                      <td>{data.name}</td>  
                      <td>{data.email}</td> 
                      <td>{data.date}</td>
                      <td>{data.visitTime}</td>
                      <td>{data.doctor}</td>
                      <td>{data.condition}</td>
                      <td> 
                        <BsThreeDotsVertical/>
                        <GrEdit onClick={() => this.editDetails(data)} className="Edit-icon"/> 
                        <RiDeleteBinLine onClick={() => this.deleteUser(data.id)} className="Delete-icon"/> 
                      </td>
                    </tr>  
                  })}  
                </tbody>  
              </table>  
            </div> 
            </div> 
            <div/>
            </>
    );  
  }  
}  
  
const mapStateToProps = state => ({  
  users: state.users  
});  
  
export default connect(mapStateToProps, { getUser, addUser, editUser, deleteUser })(App); 