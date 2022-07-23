
// exports.date_time = ()=>{
//     Date();
// }
//concise body, so return is needed
exports.datetime = () => {
    return Date();
    //in this case we have used return to call the Built-in method, return is optional 
}
// Arrow functions can have either a "concise body" or the usual "block body".
// In a concise body, only an expression is specified, which becomes the implicit return value.
//  In a block body, you must use an explicit return statement.
//example

//var func = x => x * x;   // concise body syntax, implied "return"               
//var func = (x, y) => { return x + y; };  // with block body, explicit "return" needed

exports.add_val = (a, b) => a + b;
exports.sub_val = (a, b) => a - b;
exports.mul_val = (a, b) => a * b;