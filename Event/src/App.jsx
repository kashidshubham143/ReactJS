import React from 'react';
import './App.css'
import ReactDom from "react-dom";

let count=0;
class Register extends React.Component{
   constructor(){
      super();
      this.state={
        name:"",
        email:"",
        contact:""
      }
   }
   update=(e)=>{
    // if(e.target.name=="name")
    // {
    // this.setState({name:e.target.value});
    // }
    // if(e.target.name=="email")
    // {
    // this.setState({email:e.target.value});
    // }
    // if(e.target.name=="contact")
    // {
    // this.setState({contact:e.target.value});
    // }
     this.setState({[e.target.name]:e.target.value});
   }
   
   render(){
    return   <>
        <input type='text'  name='name' value={this.state.name}   className="control" onChange={(e)=>this.update(e)} /><br/><br/>
        <input type='text'  name='email' value={this.state.email}   className="control" onChange={(e)=>this.update(e)} /> <br/><br/>
        <input type='text'  name='contact' value={this.state.contact}  className="control" onChange={(e)=>this.update(e)}/><br/><br/>
        <input type="button" name="s" value="Increment count"  onClick={this.handleEvent}
         className="control" />
    </>
   }
}

export default Register
