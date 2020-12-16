import React from 'react';
import { Route } from "react-router-dom";

import EmployeeAuthenticate from '../EmployeeAuthenticate/EmployeeAuthenticate';
import EmployeeList from '../../components/EmployeeList/EmployeeList'
import Navbar from '../../components/UI/Navbar/Navbar';


const employeeAdmin = (props) => (
    <div>
        <Navbar />
        <Route path = "/" exact component = {EmployeeAuthenticate}></Route>
        <Route path = "/list" exact component = {EmployeeList}></Route>
    </div>
);

export default employeeAdmin