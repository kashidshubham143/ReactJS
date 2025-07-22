import React from "react";
import ReactDom from "react-dom";


export default class App extends React.Component{
    constructor(){
      super();
      this.state={
         isDarkMode:false
      }
    }
   render(){
    return  <>
    <div className={this.state.isDarkMode?'app dark':'app light'}>
           <h1> {this.state.isDarkMode ? "I am Dark Theme":"I am Light Theme"}</h1>
           <button onClick={(e)=>this.setState({isDarkMode:!this.state.isDarkMode})}>Switch To {this.state.isDarkMode ? 'Light':'Dark'} Mode </button>
      </div>
         </>
   }
}

