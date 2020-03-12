import {
  set_Input_User,
  set_Input_Pass,
  login_Click,
  new_User_Id,
  new_User_Name,
  new_User_Last_Name,
  new_User_Email,
  new_User_Gender,
  add_New_Emp,
  create_emp_to_state,
  edit_Emp,
  edit_emp_to_state,
  delete_Emp
} from "./constants";

const AppState = {
  userNameInput: "",
  passwordInput: "",
  isLoggedIn: false,
  newId: "",
  newFirstName: "",
  newLastName: "",
  newEmail: "",
  newGender: "",
  isAddingEmp: false,
  employees: [],
  editEmpArr: [],
  index : '',
  isEditingEmp: false,
};

const rootReducer = (state = AppState, action) => {
  switch (action.type) {
    case set_Input_User:
      return {
        ...state,
        userNameInput: action.payload
      };

    case set_Input_Pass:
      return {
        ...state,
        passwordInput: action.payload
      };

    case login_Click:
      if (
        state.userNameInput === "akshay" &&
        state.passwordInput === "akshay"
      ) {
        alert("Login Success !");
        return {
          ...state,
          isLoggedIn: true
        };
      } else {
        alert("Wrong Username or Password !");
        return { ...state, isLoggedIn: false };
      }

    case new_User_Id:
      return {
        ...state,
        newId: action.payload
      };

    case new_User_Name:
      return {
        ...state,
        newFirstName: action.payload  
      };

    case new_User_Last_Name:
      return {
        ...state,
        newLastName: action.payload
      };

    case new_User_Email:
      return {
        ...state,
        newEmail: action.payload
      };

    case new_User_Gender:
      return {
        ...state,
        newGender: action.payload
      };

    case add_New_Emp:
      return {
        ...state,
        isAddingEmp: true
      };

    case create_emp_to_state:
      return {
        ...state,
        employees: state.employees.concat([
          {
            newId: state.newId,
            newFirstName: state.newFirstName,
            newLastName: state.newLastName,
            newEmail: state.newEmail,
            newGender: state.newGender
          }
        ]),
        isAddingEmp: false,
        isLoggedIn: true,
      };

    case edit_Emp:
      let index = action.payload;
      let tempEmp = state.employees[action.payload];
      console.log("temp", tempEmp);
      return {
        ...state,
        index : index,
        isEditingEmp: true,
        editEmpArr: tempEmp
      };

    case edit_emp_to_state: 
    let emp = state.editEmpArr;
    console.log(state.index);
      emp.newId = state.newId;
      emp.newFirstName = state.newFirstName;
      emp.newLastName = state.newLastName;
      emp.newEmail = state.newEmail;
      emp.newGender = state.newGender;
      return {
      ...state,
      employees : state.employees.fill(emp,state.index),
      isLoggedIn : true,
      isEditingEmp : false,
    }

    case delete_Emp:
      let tempEmployee = state.employees;
      tempEmployee.splice(action.payload, 1);
      return {
       
        employees: tempEmployee,
        isLoggedIn: true,
      };

    default:
      return state;
  }
};

export default rootReducer;
