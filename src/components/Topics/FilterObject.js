import React, { Component } from 'react'

class FilterObject extends Component {
  constructor(){
    super()
    this.state = {
      unFilteredArray: [
        {name: 'Matias', title: 'teacher', hairColor: 'black'},
        {name: 'Andrew', age: 27},
        {name: 'DevMountain', building: true, school: 'yes'},
        {name: 'table', height: 3.4, length: 7, color: 'light brown'}
      ],
      userInput: '',
      filteredArray: []
    }
  }

  handleChange = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }

  pickAnObject = (prop) => {
    this.setState({
      filteredArray: this.state.unFilteredArray.filter(el => el.hasOwnProperty(this.state.userInput))
      })
  }

  render(){
    return(
      <div className='puzzleBox filterObjectPB'>
        <h4>Filter Object</h4>
        <span className='puzzleText'>{JSON.stringify(this.state.unFilteredArray)}</span>
        <input className='inputLine' onChange={this.handleChange}></input>
        <button className='confirmationButton' onClick={this.pickAnObject}>Filter</button>
        <span className='resultsBox filterObjectRB'>{JSON.stringify(this.state.filteredArray)}</span>
      </div>
    )
  }
}

export default FilterObject