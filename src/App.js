import React from 'react';
  import EmployeeManagement from './empManagement.js';
import { connect } from 'react-redux';
import {loginClick} from './actions';
import CreateEmployee from './CreateEmployee';
import Login from './Login';


function App (props) {
  return (
    <div>
      {props.isLoggedIn?<EmployeeManagement>{(props.isAddingEmp)}<CreateEmployee/></EmployeeManagement>:
     <Login/>}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn : state.isLoggedIn,
    isAddingEmp : state.isAddingEmp
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginClick : ()=> dispatch(loginClick())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);