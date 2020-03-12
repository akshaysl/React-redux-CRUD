import { set_Input_User,set_Input_Pass,login_Click,new_User_Id,new_User_Name,new_User_Last_Name,new_User_Email,
    new_User_Gender,add_New_Emp,create_emp_to_state,edit_Emp,edit_emp_to_state,delete_Emp,
    } from './constants'


 export const setInputUser = (text) => {
    return {
    type : set_Input_User,
    payload : text
    }
}

export const setInputPass = (text) => {
    return {
        type : set_Input_Pass,
        payload : text
    }
}

export const loginClick = () => {
    return {
        type : login_Click
    }
}

export const setNewUserId = (text) => {
    return{
        type : new_User_Id,
        payload : text
    }
}

export const setNewUserName = (text) => {
    return {
        type : new_User_Name,
        payload : text
    }
}

export const setNewUserLastName = (text) => {
    return {
        type : new_User_Last_Name,
        payload : text
    }
}

export const setNewUserEmail = (text) => {
    return {
        type : new_User_Email,
        payload : text
    }
}

export const setNewUserGender = (text) => {
    return {
        type : new_User_Gender,
        payload : text
    }
}

export const addEmployee = () => {
    return {
        type : add_New_Emp,
    }
}

export const createEmployeeToState = () => {
    return {
        type : create_emp_to_state,
    }
}

export const editEmployee = (index) => {
    return {
        type : edit_Emp,
        payload : index
    }
}

export const editEmployeeToState = () => {
    return {
        type : edit_emp_to_state,
        }
}

export const deleteEmployee = (index) => {
    console.log('index',index);
    return {
        type : delete_Emp,
        payload : index,
    }
}