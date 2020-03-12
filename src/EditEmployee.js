import React from "react";
import { connect } from "react-redux";
import {
  editEmployeeToState,
  setNewUserId,
  setNewUserName,
  setNewUserLastName,
  setNewUserEmail,
  setNewUserGender
} from "./actions";
import EmployeeManagement from "./empManagement";
import "./editEmp.css";

function EditEmployee(props) {
  if (props.isEditingEmp) {
  return (
    <div className="input-group">
      <form className="header">
        <div className="input-group">
          <h1 id="companyName">Edit Employee</h1>
          <br />

          <label> ID : </label>
          <input className='input-group input'
            type="text"
            name="IdOfNewEmp"
            defaultValue={props.newId}
            readOnly
            onChange={setNewUserId}
          />
          <br />

          <label> First Name : </label>
          <input className='input-group input'
            type="text"
            name="NameOfNewEmp"
            defaultValue={props.newFirstName}
            onChange={props.setNewUserName}
          />
          <br />

          <label> Last Name : </label>
          <input className='input-group input'
            type="text"
            name="NameOfNewEmp"
            defaultValue={props.newLastName}
            onChange={props.setNewUserLastName}
          />
          <br />

          <label> Email : </label>
          <input className='input-group input'
            type="email"
            name="EmailOfNewEmp"
            defaultValue={props.newEmail}
            onChange={props.setNewUserEmail}
          />
          <br />

          <label> Gender : </label>
          <input className='input-group input'
            type="text"
            name="GenOfNewEmp"
            placeholder="Male / Female"
            defaultValue={props.newGender}
            onChange={props.setNewUserGender}
          />
          <br />

          <button
            className="btn"
            type="submit"
            value="submit"
            onClick={props.editEmployeeToState}
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
else return <EmployeeManagement/>
}

const mapStateToProps = state => {
  return {
    isEditingEmp: state.isEditingEmp,
    newId: state.editEmpArr.newId,
    newFirstName: state.editEmpArr.newFirstName,
    newLastName: state.editEmpArr.newLastName,
    newEmail: state.editEmpArr.newEmail,
    newGender: state.editEmpArr.newGender
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setNewUserId: event => dispatch(setNewUserId(event.target.value)),
    setNewUserName: event => dispatch(setNewUserName(event.target.value)),
    setNewUserLastName: event => dispatch(setNewUserLastName(event.target.value)),
    setNewUserEmail: event => dispatch(setNewUserEmail(event.target.value)),
    setNewUserGender: event => dispatch(setNewUserGender(event.target.value)),
    editEmployeeToState: () => dispatch(editEmployeeToState())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditEmployee);
