import React, {Component} from 'react'


export default class Sum extends Component{
  
    constructor(){
      super()
      this.state={
        number1 : 0,
        number2 : 0,
        sum : 0

      }
      
    }
    handleChange(userInput, key){
      console.log(this.state.number1)
      console.log(this.state.number2)
      this.setState({
        [key]:parseInt(userInput)

      })
      console.log(this.state.number1)
      console.log(this.state.number2)
    }

    sum(){
      let sum = this.state.sum
      let num1 = this.state.number1
      let num2 = this.state.number2
      sum = num1+num2
    
      this.setState({
        sum : sum
      }
      
      )
      console.log(this.state.sum)

    }

    render(){
    return(


       <div className = "puzzleBox sumPB">

        <h4>Sum</h4>
      
        <input type = 'number' key = 'number1'className = "inputLine" onChange = {(e) => this.handleChange(e.target.value, "number1")}></input>

        <input type = 'number' key = 'number2' className = 'inputLine' onChange = {(e) => this.handleChange(e.target.value, "number2")}></input>

        <button className = 'confirmationButton' onClick = {()=> this.sum ()}>Add</button>
        <span className = "resultsBox">Sum : {JSON.stringify(this.state.sum)}</span>
    


      </div>


    )

  }

}