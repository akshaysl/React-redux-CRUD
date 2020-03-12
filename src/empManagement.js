import React from "react";
import { connect } from "react-redux";
import { addEmployee, editEmployee, deleteEmployee } from "./actions";
import Login from "./Login";
import CreateEmployee from "./CreateEmployee.js";
import EditEmployee from "./EditEmployee";
import './emp-mgmt.css';

function EmployeeManagement(props) {
  if (props.isAddingEmp) return <CreateEmployee />;
  else if(props.isEditingEmp) return <EditEmployee/>;
  else if (props.isLoggedIn) {
    return (
      <div>
        <div className='container'>
          <h1>
            Manage Employees
          </h1>
          <button className='addEmpbtn' onClick={props.addEmployee}>Add Employee..</button><br/>
          <table>
            <thead>
              <tr className="mtr" key={Math.random()}>
                <td>ID</td>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Email</td>
                <td>Gender</td>
                <td>Edit</td>
                <td>Delete</td>
              </tr>
            </thead>
            <tbody>
              {props.employees.map((employee,index )=> (
                <tr key={employee.newId}>
                  <td>{employee.newId}</td>
                  <td>{employee.newFirstName}</td>
                  <td>{employee.newLastName}</td>
                  <td>{employee.newEmail}</td>
                  <td>{employee.newGender}</td>
                  <td>
                    <button className='editbtn' onClick={()=> props.editEmployee(index)}></button>
                  </td>
                  <td>
                    <button className='delbtn' onClick={()=> props.deleteEmployee(index)}></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  } else {
    return <Login />;
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn,
    isAddingEmp: state.isAddingEmp,
    employees: state.employees,
    isEditingEmp : state.isEditingEmp,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addEmployee: () => dispatch(addEmployee()),
    editEmployee: (index) => dispatch(editEmployee(index)),
    deleteEmployee: (index) => dispatch(deleteEmployee(index)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeManagement);