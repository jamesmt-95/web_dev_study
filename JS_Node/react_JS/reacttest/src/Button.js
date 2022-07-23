import React, { Component } from 'react'


export class Button extends Component{
    render(){
        return (<button onClick={this.props.tell}>Click</button>);
    }
}
//if disnt used the export statement then here we have to use the export default keyword 