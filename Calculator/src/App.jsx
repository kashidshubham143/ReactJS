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
  
  render() {
  return <>
   <div className="bdy">
   
  <div className="cont">
     <h1>Calculator</h1>
      <input type="text" name='first' value={this.state.first} placeholder='Enter first number' className="form-control"
       onChange={(e)=> this.setState({first:e.target.value})} /><br />
      <input type="text" name='second' value={this.state.second} placeholder='Enter second number'
       className="form-control"  onChange={(e)=> this.setState({second:e.target.value})} /><br />
      <input type="text" value={this.state.result} placeholder='Result'/><br /><br />
     <div className="btn">
      <div className="btn1">
        <input type="button" value="add" style={{backgroundColor:'ButtonHighlight'}}
      onClick={(e)=> this.setState({result:parseInt(this.state.first)+parseInt(this.state.second)})}/> <br />
      <input type="button" value="sub" 
      onClick={(e)=> this.setState({result:parseInt(this.state.first)-parseInt(this.state.second)})}/> <br />
      </div>
      <div className="btn2">
      <input type="button" value="mul" 
      onClick={(e)=> this.setState({result:parseInt(this.state.first)*parseInt(this.state.second)})}/> <br />
      <input type="button" value="div" 
      onClick={(e)=> this.setState({result:parseInt(this.state.first)/parseInt(this.state.second)})}/> <br />
      </div>
      </div>
      </div>
      </div>
    </>
 }
}

export default App
