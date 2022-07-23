import React from 'react';
export class Child1 extends React.Component{
    constructor(props){
      super()
    }
    render(){
      return(
        <h2>Hello {this.props.title}</h2>
      );
    }
  }
  export class Child2 extends React.Component{
    constructor(props){
      super()
    }
    render(){
      return(
        <h2>Hello {this.props.content}</h2>
      );
    }
  }