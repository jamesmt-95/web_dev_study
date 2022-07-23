//Basic React component with Template String
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class BasicTemplateString extends Component{
    render(){
        const fname = "James"
        const lname= "Thankachen"
        //We can use Template string in JSX, so 
        return (
        <h1>
        {`${fname} M ${lname}`}
        </h1>
        );
    }
}
//Here we have used Template string, inside the {}, also prints M b/w fname and lname 
//Output would be : James M Thankachen
ReactDOM.render(<BasicTemplateString />,document.getElementById('root4'))