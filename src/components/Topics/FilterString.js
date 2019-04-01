import React, {Component} from 'react'


export default class FilterString extends Component{
  constructor(){
    super()
    this.state={
    unfilteredArray: ['cheese', 'omega', 'forty-four', 'pickle', 'rick', 'zombie', 'gun', 'werewolf', 'pope', 'tiger', 'sadness', 'reverse', 'alex'],
    userInput : '',
    filteredArray: [],

    }


  }
  handleChange(input){

    this.setState(
      {userInput : input}
    )

  }

  filter(input){
    let filteredArray = []
    let unfilteredArray = this.state.unfilteredArray
    for (let i = 0; i < unfilteredArray.length; i++)
    {
      if(unfilteredArray[i].includes(input)){
        filteredArray.push(unfilteredArray[i])
      }
    }
    this.setState({filteredArray: filteredArray})


  }
  render(){
    return(

      <div className ="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className = "puzzleText">{JSON.stringify(this.state.unfilteredArray)}</span>
        <input className = 'inputLine' onChange = {(e)=> this.handleChange (e.target.value)}></input>
        <button className = 'confirmationButton' onClick = {() => this.filter(this.state.userInput)}>Filter</button>
        <span className = "resultsBox filterStringRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
      </div>
      )

  }

}