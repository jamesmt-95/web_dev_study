import React, {Component} from 'react';

class NavBar extends Component{ //React.Component(alreay accessed Component from Reactd)
render(){
    return (
    <h1>Hello Import {this.props.name}</h1>
    );
}
}
export default NavBar  
/*
 otherwise use export keyword as a prefix to Class, i.e export class NavBar*
 if using like that, in the index page import {NavBar} from './Navbar.js'
 otherwise direct without {}
 */ 