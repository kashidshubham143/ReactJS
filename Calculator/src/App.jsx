import React from "react";
import ReactDom from "react-dom";
class App extends React.Component {
  constructor(){
    super();
    this.state={ 
      first:"",
      second:"",
      result:""
    }
  }
  
  render(){
  return <>
   <div className="bdy">
    <h1>Calculator</h1>
  <div className="cont">
      <input type="text" name='first' value={this.state.first} placeholder='Enter first number' className="form-control"
       onChange={(e)=> this.setState({first:e.target.value})} /><br /><br />
      <input type="text" name='second' value={this.state.second} placeholder='Enter second number'
       className="form-control"  onChange={(e)=> this.setState({second:e.target.value})} /><br /><br />
      <input type="text" value={this.state.result} placeholder='Result'/><br /><br />
     
        <input type="button" value="add" 
      onClick={(e)=> this.setState({result:parseInt(this.state.first)+parseInt(this.state.second)})}/> <br />
      <input type="button" value="sub" 
      onClick={(e)=> this.setState({result:parseInt(this.state.first)-parseInt(this.state.second)})}/> <br />
      <input type="button" value="mul" 
      onClick={(e)=> this.setState({result:parseInt(this.state.first)*parseInt(this.state.second)})}/> <br />
      <input type="button" value="div" 
      onClick={(e)=> this.setState({result:parseInt(this.state.first)/parseInt(this.state.second)})}/> <br />
      </div>
      </div>
    </>
 }
}

export default App
