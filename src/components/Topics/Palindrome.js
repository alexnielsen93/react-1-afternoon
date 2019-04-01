import React, {Component} from 'react'


export default class Palindrome extends Component{
  constructor(){
    super()
    this.state={
      userInput: '',
      palindrome: false,
    }

  }
  handleChange(val){

    this.setState({
      userInput:val
    }
    )
  }
  solve(userInput){
    let reversedStringArr = []
    
    reversedStringArr = userInput.split("")
    console.log(reversedStringArr)
    reversedStringArr = reversedStringArr.reverse("")
    let reversedString = reversedStringArr.join("")
    console.log(reversedString)
    if (userInput === reversedString){

      this.setState({
        palindrome : true
      })
    }
    
  }
  render(){
    return(
      <div className = "puzzleBox filterStringPB">

      <h4>Palindrome</h4>
      <input className = "inputLine" onChange = {(e)=> this.handleChange(e.target.value)}></input>
      <button className = "confirmationButton" onClick = {()=>{this.solve(this.state.userInput)}}></button>
      <span className = 'resultsBox'>Palindrome: {JSON.stringify(this.state.palindrome)}</span>

      </div>
    )

  }

}