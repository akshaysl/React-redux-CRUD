import React from "react";
import { connect } from "react-redux";
import {
  setNewUserId,
  setNewUserName,
  setNewUserLastName,
  setNewUserEmail,
  setNewUserGender,
  createEmployeeToState
} from "./actions";
import EmployeeManagement from "./empManagement";
import "./createEmp.css";

function CreateEmployee(props) {
  if (props.isAddingEmp) {
    return (
      <div className='input-group'>
        <form className='header'>
          <div className="input-group">
            <h1 id="companyName">Create New Employee</h1>
            <br />

            <div className="input-group">
            <input className='input-group input'
              type="text"
              name="IdOfNewEmp"
              placeholder="Enter ID of Employee.."
              onChange={props.setNewUserId}
            />
            </div>

            <input className= 'input-group input'
              type="text"
              name="NameOfNewEmp"
              placeholder="Enter first name of Employee.."
              onChange={props.setNewUserName}
            />
            <br />

            <input className='input-group input'
              type="text"
              name="NameOfNewEmp"
              placeholder="Enter last name of Employee.."
              onChange={props.setNewUserLastName}
            />
            <br />

            <input className='input-group input'
              type="email"
              name="EmailOfNewEmp"
              placeholder="Enter email.."
              onChange={props.setNewUserEmail}
            />
            <br />

            <input className='input-group input'
              type="text"
              name="GenOfNewEmp"
              placeholder="Male / Female"
              onChange={props.setNewUserGender}
            />
            <br />

            <button className='btn'
              type="submit"
              value="submit"
              onClick={props.createEmployeeToState}
            >
              Add Employee
            </button>
          </div>
        </form>
      </div>
    );
  } else return <EmployeeManagement />;
}

const mapStateToProps = state => {
  return {
    isAddingEmp: state.isAddingEmp,
    newId: state.newId,
    newFirstName: state.newFirstName,
    newLastName: state.newLastName,
    newEmail: state.newEmail,
    newGender: state.newGender
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setNewUserId: event => dispatch(setNewUserId(event.target.value)),
    setNewUserName: event => dispatch(setNewUserName(event.target.value)),
    setNewUserLastName: event => dispatch(setNewUserLastName(event.target.value)),
    setNewUserEmail: event => dispatch(setNewUserEmail(event.target.value)),
    setNewUserGender: event => dispatch(setNewUserGender(event.target.value)),
    createEmployeeToState : () => dispatch(createEmployeeToState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateEmployee);