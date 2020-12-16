import { React } from "react";

import { Navbar } from 'react-bootstrap';
import classes from './Navbar.module.css'

const navbar =  (props) => (
    <Navbar className = {classes.Navbar}>
        <Navbar.Brand>Employee Roster</Navbar.Brand>
    </Navbar>
);

export default navbar;