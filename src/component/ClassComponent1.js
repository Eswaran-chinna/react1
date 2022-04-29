import React from "react";
class ClassComponent1{
    constructor(props){
       
      console.log(this.props.model) 
      console.log(this.props.pcar) 
    } 
   //  GetDetails(){
   //    console.log(this.props.model) 
   //    console.log(this.props.pcar) 
   //  }

}
var obj1 = new ClassComponent1("maruti","2010");
console.log(obj1);

export default ClassComponent1; 