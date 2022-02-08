import axios from 'axios';
import React, { Component } from 'react';

export default class test extends Component {

    state={
    task:[]
    }

    addlink(){
        this.setState({task: [...this.state.task,""]})
    }
    handleChange(e, index){
        this.state.task[index]= e.target.value
        this.setState({task:this.state.task})
    }
    handleRemove(index){
        this.state.task.splice(index,1)

        this.setState({links:this.state.task})

    }
    onSubmitClick=()=>{
   
    axios.post('http://localhost:4000/addlink',{
      task:this.state.task
    })
    }
    
    
  render(){
    return (
        
        <>
         {
                  this.state.task.map((task,index)=>{
                    return(
                        <div key={index}>
             <input valur={this.state.task} 
             onChange={(e)=>this.handleChange(e,index)}
          
              placeholder='links'></input>
                        <button onClick={()=>this.handleRemove()}>Remove</button>
                        </div>
                    )
                  })
                }
                  
        <button onClick={(e)=>this.addlink(e)}>Add</button>
       
        <button onClick={()=>this.onSubmitClick()}>Submit</button>
</>
    
    )
  }
}