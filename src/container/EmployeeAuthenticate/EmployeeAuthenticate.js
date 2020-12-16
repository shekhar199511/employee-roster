import React from 'react';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';

import classes from './EmployeeAuthenticate.module.css';
import { Button} from 'react-bootstrap';

const EmployeeAuthenticate = (props) => {

    const history = useHistory();
  

    let email='';
    let password='';

    const getEmailHandler = (event) => {
        email = event.target.value;
    }

    const getPasswordHandler = (event) => {
        password = event.target.value
    }

    const authenticateUserHandler = (event) => {
        props.submitClicked()
        event.preventDefault();
        if(email==='hruday@gmail.com'&&password==='hruday123'){
            history.push('list');
        } else{
            props.errorOccured()
        }
    }

    return(
        <div className={classes.FormContainer}>
            <div>
                <p className = {classes.Label}>Login to Continue</p>
            </div>
            <form onSubmit = {authenticateUserHandler}>
                <div className={classes.InputContainer}>
                    <input className={classes.InputElement} type="email" name="email" placeholder="Email" onChange = {getEmailHandler}/>
                </div>
                <div className={classes.InputContainer}>
                    <input className={classes.InputElement} type="password" name="password" placeholder="Password" onChange = {getPasswordHandler}/>
                </div>
                <Button variant="primary" type = "submit" className = {classes.LoginButton}>Sign In</Button>
            </form>
            {props.authenticatedError &&
                <div><p className = {classes.ErrorMsg}>Email or password is incorrect!!!</p></div>
            }
        </div>
    )
};

const mapStateToProps = state => {
    return {
        authenticatedError : state.authenticatedError
    };
}

const mapDispatchToProps = dispatch => {
    return {
        submitClicked : () => dispatch({type : 'AUTHENTICATEERRORFALSE'}),
        errorOccured : () => dispatch({type : 'AUTHENTICATEERRORTRUE'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeAuthenticate)