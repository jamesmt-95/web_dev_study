//Class name or Func Name should be same with import statement

import React,{Component} from "react";
import ReactDOM from "react-dom";
import {render} from 'react-dom'
//import {render} from 'react-dom' accessing propert 'render' from object
// then instead of ReactDOM.render we can directly use render(<Component/>,.....)
import NavBar from './NavBar.js';
import {Button} from './Button';
import {Child1,Child2} from './Child.js';
import {PropValidate} from './propsValidation.js'
import {StatelessFun} from './StatelessFun.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
//Redux
import { Provider } from 'react-redux';
import {createStore} from 'redux';

import App from './components/App';
//Redux End

//import bootstrap min.css and change class to classNaame, for to htmlFor, autocomplete to autoComplete

import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

//Program 1
class MyComponentClass extends React.Component {
render() {
return <h1>Hello world</h1>; //this is JSX, but JSX Compiler translates JSX into Javascript  
//return React.createElement("div", null, "Hello World"); this is what, JSX is Compiled into
}
}
ReactDOM.render(<MyComponentClass />,document.getElementById('root0'));


//Program 2
class Test extends React.Component {  //It is possible to use Function Test instead of Class
    /*
    The map function will convert the array of person objects into an array of names (strings).
    for more about map function .. https://hackernoon.com/using-javascripts-map-function-e0245b97d5ea
    */
    render() {  //i refers to item in the Array and index is index of array(each item should have key)
        const ListItems = Array.map((data,index)=> <li key={index}> {data} </li>) //defines Number 
        // return <h1> Hello World </h1>;
        return (
        <ul> {ListItems} </ul>
        );
    }

}
const Array = ['A','B','C','D'] //Assigns values to Number defined above 
ReactDOM.render(<Test Array={Array}/>,document.getElementById('root1'))  //Value as argument 

//Program 3
class Key extends React.Component{
    render(){
        const List = Number.map(i => <li key={i.id}>{i.value}</li>) //instead index passing Id from array to key
    return (
    <ul>{List}</ul>
    );
    }
}
const Number=[{id:101,value:'James'},{id:102,value:'Joseph'}]
ReactDOM.render(<Key Number={Number}/>,document.getElementById('root2'))

/*
import React from ‘react’;
import ReactDOM from ‘react-dom’;
ReactDOM.render(<h1>Hello</h1>, document.getElementById(‘app’));

ReactDOM.render(<h1>{2 + 3}</h1>, document.getElementById(‘app’));
*/

//using imported Classs
//Program 4
class UseImport extends React.Component{
    render(){
   
        return (
            <div> <NavBar name={'James'}/> </div>
        );
    }
}
ReactDOM.render(<UseImport />,document.getElementById('root3'))



//Program 5
class ImpButton extends React.Component{
    constructor(props) { 
        /*
The constructor method is a special method for creating and initializing an object created within a class.
two purposes with the constructor function.?
1.Set the initial state of the component
2.Point the global context of this keyword.
3.We can bind events to constructor that occurs in the component 
         */
        super(props);
        
        this.tell=this.tell.bind(this) 
        //if we are not using arrow function , then we we need to bind event to this
      }
    
    tell(){   //normal function(not in ES6(arrow function) )
        console.log(this);
        }
    render(){
        
        return <Button tell={this.tell}/>;
    }
}

ReactDOM.render(<ImpButton />,document.getElementById('root5'))


//Program 6
class EventArrow extends React.Component {
   constructor(props){
   super() 
   //no need to bind event to this, coz we used an arrow functoni
}
    handleClick = () => { //it's a an arrow function so dont need to bind this event to 'this'
      console.log('this is:', this);
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          Click- Arrow Fun
        </button>
      );
    }
  }
ReactDOM.render(<EventArrow />,document.getElementById('root6'))


//Program 7
class ButtonEvent extends React.Component{
constructor(props){
  super()
}
eventcall = ()=>{
  console.log('Ok, You clicked on Button');
}
render(){
  
  return (
<input type='submit' onClick={this.eventcall} value='Click on Me'/>
);
/*
React.createElement(Button, {onClick: (void 0).eventcall}, "Me!"); 
React.createElement("div", {class: "Row",id:"get"}, "Hello"); -> <div class='Row' id='get'>Hello</div>
Normal JavaScript Button Event - <Button onClick='tell()'>Me!</Button>
  Compiled JSX  - React.createElement(Button, {onClick: "tell()"}, "Me!");
*/
}
}
ReactDOM.render(<ButtonEvent />,document.getElementById('root7'))

//Program 8
//Nested Components

export class Main extends React.Component{
  constructor(props){
    super()
  }
  render(){
    return(
      <div>
      <Header call={'MY'} />
      <Footer caller={'James'}/>
      </div>
    );
  }

}
//ReactDOM.render(<Main />,document.getElementById('root9'))

class Header extends React.Component{
  render(){
    return (
    <h1> Header {this.props.call}</h1>
    );
  }
}

class Footer extends React.Component{
  render(){
    return (
    <h1> Footer {this.props.caller}</h1>
    );
  }
}

class Page extends React.Component{
  render(){
    return (
<Main />
    );
  }
  
}
ReactDOM.render(<Page />,document.getElementById('root8'))

//Program 9
class State extends React.Component{
  constructor(props){
    super()

    this.state={
      header:'Head',
      footer:'foot'
    }
  }
render(){
  return(
    <div>
      <h1>{this.state.header}</h1>
      <h1>{this.state.footer}</h1>
    </div>
  );
}
}
ReactDOM.render(<State />,document.getElementById('root9'))

//Program 10

class Sample extends React.Component{
  constructor(props){
    super()
  }
  render(){
    return(
      //child1,2 are imported
      <div>
     <Child1 title={'Sample'}/>   
     <Child2 content={'Content'}/>
      </div>
      
    );
  }
}
ReactDOM.render(<Sample />,document.getElementById('root10'))
 
//Program 11
class Sample1 extends React.Component{
  constructor(props){
    super()
  }
  render(){
    return(
      <div>
     <h1>{this.props.name}</h1>
     <h1>{this.props.age}</h1>
      </div>
      
    );
  }
}
class Sample1Exec extends React.Component{
  constructor(props){
    super()
  }
  render(){
    return(
      <Sample1 name={'James'} age={'23'}/>
    );
  }
}
ReactDOM.render(<Sample1Exec />,document.getElementById('root11'))


//Program 12
class Sample2 extends React.Component{
  constructor(props){
    super()
  }
  render(){
    return(
      <div>
     <h1>{this.props.id}</h1>
     <h1>{this.props.course}</h1>
      </div>
      
    );
  }
}
Sample2.defaultProps={
  id:'Jack',
  course: 22
}
ReactDOM.render(<Sample2 id={'job'} />,document.getElementById('root12'))

//Program 13
class Sample3 extends React.Component{
  constructor(props){
    super()
  }
  render(){
    return(
      <div>
     <h1>{this.props.FName}</h1>
     <h1>{this.props.LName}</h1>
      </div>
      
    );
  }
}

class Callsample3 extends React.Component{
  constructor(props){
    super()
    this.state={
      FName:'James',
      LName:'Thankachen'
    }
  }
  render(){
    return(
      <div>
     <Sample3 FName={this.state.FName} LName={this.state.LName} />
      </div>
      
    );
  }
}
ReactDOM.render(<Callsample3 />,document.getElementById('root13'))

//Program 14

class Form extends React.Component{
  constructor(props){
    super()
  }
  render(){
    return(
      <div className="card p-4 mt-4">
      <label htmlFor="get_fname">Fullname</label>
      <input type="text" id="get_fname" className="form-control" name="get_fname"/>
      <label htmlFor="get_mob">Mobile Number</label>
      <input type="text" id="get_mob" className="form-control" name="get_mob"/>
      <label htmlFor="get_mail">E-Mail</label>
      <input type="text" id="get_mail" className="form-control" name="get_mail"/>
      <button type="submit" className="btn btn-primary w-25 btn-sm mt-4 mx-auto">Submit</button>
     </div>
    );
  }
}

class Register extends React.Component{
  constructor(props){
    super()
  }
  render(){
    return(
    <div className="col-md-6 mx-auto">
    <form action="/submit_Form" method="POST" autoComplete="on">
    <Form />
    </form>
    </div>
    );
  }
}
ReactDOM.render(<Register />,document.getElementById('root14'))

//Program 15
//Main class is Imported to Here, Check '../src/propsValidation.js'

class UsePropValidate extends React.Component{
  constructor(props){
    super()
  }
  render(){
    return(
    <div >
    <PropValidate />
    </div>
    );
  }
}

ReactDOM.render(<UsePropValidate />,document.getElementById('root15'))
/*
ReactJS Component API 
1. setState() -  used for updating the state of a component and re-rendering the UI
2.forceUpdate() - tells React that the component needs re-rendering by calling forceUpdate().
3.findDOMNode() - searching DOM 
*/
//Program 16 

class Setstate extends React.Component{
  constructor(props){
    super()
    this.state={
      data : [0,2]
      //name:''
    }
  }
 
/*
localStorage in React JS
> npm install reactjs-localstorage
import {reactLocalStorage} from 'reactjs-localstorage';
reactLocalStorage.set('var', true);
reactLocalStorage.get('var', true);
reactLocalStorage.setObject('var', {'test': 'test'});
reactLocalStorage.getObject('var');

*/
Setstate =(e)=>{
//let value = parseInt(e.target.value);
let value = e.target.value;
let array = this.state.data.slice();
// console.log(array)
array.push(value);
this.setState({data:array})
//this.setState({name:e.target.value})

}
render(){
return(
<div>
<input type='text' id='text' className='form-control' onKeyUp={this.Setstate} placeholder='Enter 1-10' />
<ul>{this.state.data.map((data,index) => (<li key={index}>{data}</li>))}</ul>
</div>
);
}
}
ReactDOM.render(<Setstate/>,document.getElementById('root16'))


//Program 17

class ForceUpdate extends React.Component{
  constructor(props){
    super()
  }
  handleforce = ()=>{
  this.forceUpdate();
  //console.log('OK');
  }
  render(){
    return(
<div>
  <button onClick={this.handleforce}>UpdateDOM</button>
  <h4>{Math.random().toString().split('.')[1]}</h4>
</div>
    );
  }
}
ReactDOM.render(<ForceUpdate />,document.getElementById('root17'))

//Program 18

class FindDOM extends React.Component{
  constructor(props){
    super()
  }
  style = ()=>{
  let Obj = document.getElementById('object');
  ReactDOM.findDOMNode(Obj).style.color='green';
  }
  render(){
    return(
<div>
  <button onClick={this.style}>Apply Style</button>
  <h4 id='object'>FindDOMNode</h4>
</div>
    );
  }
}
ReactDOM.render(<FindDOM />,document.getElementById('root18'))


//Program 19

class UpdateState extends React.Component{  //setState() method 
  constructor(props){
    super()
    this.state={
    i:0
    }
  }
  increment = ()=>{
    this.setState({i:this.state.i+1})
  }
 
  render(){
    return(
<div>
  <button id='incre' onClick={this.increment}>Increment</button>
  <h4>{this.state.i}</h4>
</div>
    );
  }
}
ReactDOM.render(<UpdateState />,document.getElementById('root19'))


//Program 20
class InputState extends React.Component{
  constructor(props){
    super()
this.state={
  name:'xxxxxx'
} 
}
updateName=(e)=>{
this.setState({name:e.target.value})
}
render(){
  return(
    <div>
      <input type='text' onChange={this.updateName} className='form-control' value={this.state.name}/>
      <h3>Your Name is : {this.state.name} </h3>
    </div>
  );
}
}

ReactDOM.render(<InputState />, document.getElementById('root20'))

//Program 20
// applying inline style
class Style extends React.Component{
constructor(props){
  super()
}
render(){
  return(
    <div>
<h1 style={{color:'red',fontSize:'20px'}}>Hello James, How are you?</h1>  
      </div>
  );
  //inline style using {{}}
  /* 
  In regular JavaScript, style names are written in hyphenated-lowercase. 
  In React, those same names are instead written in camelCase. Like this:
  fontSize, marginTop (font-siz, margin-top)
  also attributes (class -> className, for -> htmlFor, autocomplete -> autoComplete)
  */ 
}
}
ReactDOM.render(<Style />,document.getElementById('root21'))

//applying styles as object
class ObjStyle extends React.Component{
  constructor(props){
    super()
  }
  render(){
    /*
    In regular JavaScript, style names are written in hyphenated-lowercase.
    In React, those same names are instead written in camelCase. Like this:
    const styles = {
    marginTop: ‘100px’,
    fontSize: ‘50px’
};
    */
   const objstyle={
     color:'green',
     fontSize:'25px'
   }
    return(
      <div>
  <h1 style={objstyle}>Is this Object Styles???!</h1>  
        </div>
    );
  }
  }
  ReactDOM.render(<ObjStyle />,document.getElementById('root22'))


  //Program 22 Printing table data 
  class TableStruct extends React.Component{
    constructor(props){
      super()
    }
    render(){
      return(
        <tr key={this.props.key}>
          <th scope='row'>{this.props.data.id}</th>
          <td>{this.props.data.name}</td>
          <th>{this.props.data.age}</th>
        </tr>
      );
    }
  }

  class LoopTable extends React.Component{
    constructor(props){
      super()
      this.state={
        row:[{id:1,name:'James',age:24},{id:2,name:'Jacob',age:25}]
      }
    }
    render(){
      return(
        <table className='table'>
        <thead>
          <tr>
            <th scope='col'>ID</th>
            <th scope='col'>Name</th>
            <th scope='col'>Age</th>
            </tr>

          </thead>
          <tbody>
{ this.state.row.map((data,index)=> <TableStruct key={index} data={data} /> )}
            </tbody>
        </table>
      );
    }
    
  }
  ReactDOM.render(<LoopTable />,document.getElementById('root23'))


  //Program 23 Select OnChange Function
//Raising Event -  A components event method is assigned via this.props, and binding event from another component

  class Select extends React.Component{
    constructor(props){
      super()
    this.state={
      option:[{id:1,name:'James'},{id:2,name:'Steve'},{id:3,name:'Jobin'}]
    }
    }
    render(){
      return(
        <div>
          <select className='form-control' onChange={this.props.onChange}>
          <option selected={this.props.Selected ? true : false} disabled={this.props.Disabled ? true : false }>Select Name</option>
          {this.state.option.map((data)=> <option key={data.id} value={data.name}>{data.name}</option>)}
          </select>
          </div>
      );
      /*
    How to use selected & disabled in React
      Method 1 
        <option selected={this.props.Selected ? true : false} disabled={this.props.Disabled ? true : false }>Select Name</option>
        then pass defaultProps as true
      Method 2
      <option selected={true} disabled={true}>Select Name</option>
  */   
}
  }

  Select.defaultProps={
    Disabled:true,
    Selected:true
  }


class ControlSelect extends React.Component{
  constructor(props){
    super()

    this.state={
      changeName:' '
    }
  }
  controlSelect = (e)=>{
    let name = e.target.value

    this.setState({
      changeName:name
    })
  }
  render(){
    return(
      <div>
      <Select onChange={this.controlSelect} />
      <h4>{this.state.changeName}</h4>
      </div>
    );
  }
}  
  ReactDOM.render(<ControlSelect />,document.getElementById('root24'))


  //Program 24
  class LifeCycle extends React.Component {
    componentWillMount() {
       console.log('Component WILL MOUNT!')
    }
    componentDidMount() {
       console.log('Component DID MOUNT!')
    }
    componentWillReceiveProps(newProps) {    
       console.log('Component WILL RECIEVE PROPS!')
    }
    shouldComponentUpdate(newProps, newState) {
       return true;
    }
    componentWillUpdate(nextProps, nextState) {
       console.log('Component WILL UPDATE!');
    }
    componentDidUpdate(prevProps, prevState) {
       console.log('Component DID UPDATE!')
    }
    componentWillUnmount() {
       console.log('Component WILL UNMOUNT!')
    }
    render() {
       return (
          <div>
             <h3>{this.props.myNumber}</h3>
          </div>
       );
    }
 }
 LifeCycle.defaultProps={
   myNumber:7
 }
 ReactDOM.render(<LifeCycle myNumber={5} />,document.getElementById('root25'))

 
//Program 25
 class Ref extends React.Component{
constructor(props){
  super()
this.state={
  name:' '
  //age:props.age ( will be assigned from props)
}
}

update_state = (e)=>{
let val = e.target.value
this.setState({name:val})
}

clear = ()=>{
  this.setState({name:''})
  ReactDOM.findDOMNode(this.refs.User).focus();
}

render(){
  return(
    <div>
      <input type='text' ref='User' className='form-control' value={this.state.name} onChange={this.update_state}/>
      <small className='text-danger font-weight-bold'>{this.state.name}</small>
      <div>
      <button onClick={this.clear}>Reset</button>
      </div>
      </div>
  );
}
}
ReactDOM.render(<Ref />,document.getElementById('root26'))


//Program 26
class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
      </div>
    )
  }
}

class Users extends React.Component {
  render() {
    return <h1>Users</h1>
  }
}


class Contact extends React.Component {
  render() {
    return <h1>Contact</h1>
  }
}


const routing = (
  <Router>
    <div>
    <ul className='nav'>
        <li className='nav-item'>
          <Link to="/">Home</Link>
        </li>
        <li className='nav-item'>
          <Link to="/users">Users</Link>
        </li>
        <li className='nav-item'>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Route exact path="/" component={Home} />
      <Route path="/users" component={Users} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root27'))



// MOSH HAMEDANI - 
//Program 27 (Following programs from Mosh Hamedani's Tutorial)
class Counter extends Component {
  constructor(props) {
    super();
    this.state = { 
    count:1
     }
  }

  //Function can be written here or after render()

style = {
fontWeight:'bold',
fontSize:'15px'
}
//Style as object then style={style} but in this case im using inline style with {{}}
  render() { 
    return ( 
      <div>
        <span style={{fontWeight:'bold',fontSize:'10px'}} className='badge badge-primary m-2'>{this.formatCount()}</span> 
        <button className='btn btn-secondary btn-sm'>Increment</button>
        </div> 
     );
  }
  // When we referring functions inside components, use () after this.fun_name, not needed when specifying events
  formatCount=()=>{
    //return this.state.count === 0 ? 'Zero' :this.state.count;
    
    /*
    In this case this.state.count is repeated, to avoid that
    const {count} = this.state; 
     Here this.state is an object, and 'count' is the property of that object
     return count === 0 ? 'Zero' : count;
    */
   
   const {count} = this.state; //specifying object

   return count === 0 ? 'Zero' : <h4>{count}</h4>; //Here JSX Also possible to return
    }
}
ReactDOM.render(<Counter/>, document.getElementById('root28'))


//Program 28 
class CounterAppend extends Component {
  constructor(props) {
    super();
    this.state = { 
    count:0
     }
  }
  
style = {
fontWeight:'bold',
fontSize:'15px'
}
  render() {  
    /*
    let classes = this.getBadgeClasses(); 
    above line gets return class from getBadgeClasses() then className={classes}
                        OR
    Directly className= {this.getBadgeClasses()} 
    */
    return ( 
      <div>
        <span style={this.style} className={this.getBadgeClasses()}>{this.formatCount()}</span> 
        <button className='btn btn-secondary btn-sm'>Increment</button>
        </div> 
     );
  }

  formatCount=()=>{
   const {count} = this.state; //specifying object
   return count === 0 ? 'Zero' : <h4>{count}</h4>; //Here JSX Also possible to return
    }

  getBadgeClasses=()=> {   //this method is generated by Refactor(Ctrl+Shift+R) Option , Right click on declaration then Refactor
    let classes = 'badge m-2 badge-';
    const { count } = this.state;
    classes += (count === 0) ? 'warning' : 'primary'; // or this.state.count === 0
    return classes; // return is important
  }
}
ReactDOM.render(<CounterAppend/>, document.getElementById('root29'))
 
//Program 29
class RenderTags extends Component {
  constructor(props) {
    super();
    this.state = { 
      tags:['Tag1','Tag2','Tag3','Tag4']
     }
  }
  render() { 
    
    return ( 
      <div>
        <ul>
          {this.renderTags()}
          </ul>
          <span>{this.state.tags.length === 0 && 'No Tags Avaliable'}</span>
        </div>
     );
  }
  /*
   Boolean true && 'String' returns true
   in this case if tags.length is 0, then 1st operands is true (boolean becomes true) so it returns Strings followed by &&
   (If String before boolean then returns boolean )
   */
  renderTags=()=>{
    const {tags} = this.state;
    if (tags.length === 0) return <h3>No Tags</h3>
    else return tags.map((data,index)=><li key={index}>{data}</li>)
  }

}
ReactDOM.render(<RenderTags/>, document.getElementById('root30'))


//Program 30
//this.props.children

class Children extends React.Component{
  render(){
 console.log(this.props)
      return (
        <div>
          <div> Hello ! Are you Ok?? </div>
          <p>{this.props.children}</p>
          </div>
      );
  }
}

class WrapChildren extends Component {
 
  render() { 
    return ( 
      <Children>
        <h3>This is Children of component</h3>
        </Children>
     );
  } 
}

ReactDOM.render(<WrapChildren/>, document.getElementById('root31'))


//Academind Topics

class InitData extends Component{
constructor(props){
  super()
  this.state={
    age:props.age
  }
}
render(){
  return(
<div>
  <p>Hello, {this.props.name} and your age is{this.state.age}</p>
  <button onClick={this.IncreAge}>Age +3</button>
  </div>
  );
}
IncreAge=()=>{
this.setState({
  age:this.state.age + 3
})
}

}

class AccessData extends Component{
  constructor(props){
    super()
  }
  render(){
    return(
  <div>
    <h4>WELCOME</h4>
    <InitData age={25} name={'James'}/>
  </div>
    
    );
  }  
  }
 render(<AccessData/>,document.getElementById('root32'))


//Stateless Functional Component (./StatelessFun.js)  
class UseStatelessFunComp extends Component{
  constructor(props){
    super()
  }
  render(){
    return(
  <div>
    <StatelessFun name={'James'}/>
  </div>
    );
  }  
  }
 render(<UseStatelessFunComp/>,document.getElementById('root32'))
 
 /*
  Communicating b/w parent component and child component is like passing function reference 
  from parent to child(only direction possible ) component through this.props.func_Name, 
  check above, i did an example with <select>
*/
//JSX <h1>Hello {fname + " " + lname}-> will put space b/w two variables
/*
Template string also works in JSX (inside the {}), <h1>Hello { `${fname} ${lname}`}</h1> 
(like console.log(`Error While uploading File ${err}`) like did in express)
*/
const store= createStore(reducer);
render( 
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root33')
)
