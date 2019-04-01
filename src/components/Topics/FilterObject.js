import React, {Component} from 'react'


export default class FilterObject extends Component{

  constructor(){
    super()
    this.state={
      unfilteredArrayOfPeople : [
      {name: 'Bob', age : 40, favoriteColor: 'blue', favoriteBook: 'The Lord of the Rings', favoriteFood: "Cheese"}, 

      {name : 'Joe', age: 22, favoriteColor: 'green', favoriteBook: "Harry Potter", favoriteAnimal: "Elephant"}, 

      {name: 'Mary', age : 103, favoriteColor: 'Perserverence', favoriteFood: "Whiskey", favoriteAnimal : "America"}],

      userInput: '',
      filteredArray: [],
    }
  }
    
    handleChange(val){
      this.setState(
        {userInput: val}
        
      )
      ;


    }

    solveProblem( userInput){
      let unfilteredArr = this.state.unfilteredArrayOfPeople
      let newFilteredArray = []
      for (let i = 0; i < unfilteredArr.length; i++){

        if (unfilteredArr[i].hasOwnProperty(userInput)){
          newFilteredArray.push(unfilteredArr[i])
        }
      }
      this.setState({filteredArray: newFilteredArray});
    }


  render(){
    return(

      <div className = "puzzleBox filterObjectPB">

      <h4>"Filter Object"</h4>

      <span className = "puzzleText">Original: {JSON.stringify(this.state.unfilteredArrayOfPeople)}</span>

      <input className = "inputLine" onChange ={(e)=> this.handleChange(e.target.value)}></input>

      <button className = "confirmationButton" onClick ={()=> {this.solveProblem(this.state.userInput, this.state.unfilteredArrayOfPeople )}}>Filter</button>

      <span className = "resultsBox filterObjectRB"> Filtered: {JSON.stringify(this.state.filteredArray)}</span>

      </div>
    )

  }

}