import React from 'react';
//instead of export class HeaderFunc extends Component{}
export const StatelessFun = (props)=>{ 
//no need of render() bcs, it's function so just return 
return(
<div>
<div> Profile</div>
<p>Name :{props.name}</p> 
</div>
)
// props.name - instead of {this.props.name} Because here we dont have render method
}

