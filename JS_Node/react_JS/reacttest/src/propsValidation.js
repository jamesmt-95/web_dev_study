//For more information  https://reactjs.org/docs/typechecking-with-proptypes.html
import React from 'react';
import PropTypes from 'prop-types' //P is Big Letter
/*
Because Prop-Types are now a separately maintained library named prop-types, but 
Component.propTypes(p is small letter) and Component.defaultProps
*/
export class PropValidate extends React.Component{
    constructor(props){
        super()
    }
    render(){
        return(
            
           <div>
                <h3>{this.props.propArray}</h3>
                <h3>{this.props.propBool ? true : false}</h3>
                <h3>{this.props.Func(5)}</h3>
                <h3>{this.props.propString}</h3>
                <h3>{this.props.propNumber}</h3>
                <h3>{this.props.propObject.Object1}</h3>
                <h3>{this.props.propObject.Object2}</h3>
                <h3>{this.props.propObject.Object3}</h3>
            </div>
        );
    }
}

PropValidate.propTypes={
    propArray:PropTypes.array,
    propBool:PropTypes.bool,
    Func:PropTypes.func,
    propString:PropTypes.string.isRequired,
    propNumber:PropTypes.number,
    propObject:PropTypes.object
}

PropValidate.defaultProps = {
    propArray:[1,2,3,4],
    propBool:true,
    Func:(x)=> {return x * 2}, //Func: function(x){return x * 2}
    propString:'Hello String',
    propNumber:9020720,
    propObject:{
        Object1:'Object1',
        Object2:'Object2',
        Object3:'Object3'
    }
}

