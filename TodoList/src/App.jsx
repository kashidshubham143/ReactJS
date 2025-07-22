import React from "react";
import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css"
class App extends React.Component{
constructor()
  {
    super();
    this.state={
      task:"",
      taskList:[]
    }
  }


  render(){
    return <>
    <div className="to">
     
      <div className="list">
        <h1 className="mt-5"> Task :{this.state.taskList.length}</h1>
        <input type="text" name="task" placeholder="Enter task"  className="form-control w-75 mt-3" value={this.state.task}  onChange={(e)=>this.setState({task:e.target.value})}/> <br />
        <input type="button" className="btn btn-primary w-25" value="Add task" 
        onClick={(e)=>this.setState({taskList:[...this.state.taskList,this.state.task]})}/>
        <br /> <br />
         <table className=" table table-striped w-50" >
                <tr>
                  <th>SRNO</th>
                  <th>Task</th>
                </tr>
                {
                  this.state.taskList.map((item,index)=>(<tr>
                    <td>{index+1}</td><td>{item}</td></tr>))
                }
             </table>
      </div>
    </div>   

    </>
  }
}

export default App
