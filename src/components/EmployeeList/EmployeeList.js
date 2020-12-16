import { React } from "react";
import { connect } from 'react-redux';

import classes from './EmployeeList.module.css'

const employeeList = (props) => {

    let rows = [];
    
    for(let user=0;user<props.users.length;user++){
        
        rows.push(<div><div key = {props.users[user].id} className = {classes.EmployeeList}>
            <div key = {props.users[user].id} className = {classes.EmployeeDetails}>{props.users[user].id}</div>
            <div key = {props.users[user].id} className = {classes.EmployeeDetails}>{props.users[user].name}</div>
            <div key = {props.users[user].id} className = {classes.EmployeeDetails}>{props.users[user].age}</div>
            <div key = {props.users[user].id} className = {classes.EmployeeDetails}>{props.users[user].gender}</div>
            <div key = {props.users[user].id} className = {classes.EmployeeDetails}>{props.users[user].email}</div>
            <div key = {props.users[user].id} className = {classes.EmployeeDetails}>{props.users[user].phoneNo}</div></div><hr/></div>);
    }
    

    return(
        <div>
            <div className = {classes.EmployeeList}>
                <div className = {classes.EmployeeHeader}>ID</div>
                <div className = {classes.EmployeeHeader}>NAME</div>
                <div className = {classes.EmployeeHeader}>AGE</div>
                <div className = {classes.EmployeeHeader}>GENDER</div>
                <div className = {classes.EmployeeHeader}>EMAIL</div>
                <div className = {classes.EmployeeHeader}>PHONE NO</div>
            </div>
            <hr/>
            {rows}
        </div>
    )

}

const mapStateToProps = state => {
    return {
        users : state.users
    };
}


export default connect(mapStateToProps) (employeeList);