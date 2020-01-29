import React, { Component } from 'react'

class FilterString extends Component {
  constructor(){
    super()
    this.state = {
      unFilteredArray: ['scott', 'izzy', 'whitney', 'andrew', 'anders'],
      userInput: '',
      filteredArray: []
    }
  }

  handleChange = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }

  pickNames = () => {
    this.setState({
      filteredArray: this.state.unFilteredArray.filter(el => el.includes(this.state.userInput))
      })
  }

  render(){
    return(
      <div className='puzzleBox filterStringPB'>
        <h4>Filter String</h4>
        <span className='puzzleText'>{JSON.stringify(this.state.unFilteredArray)}</span>
        <input className='inputLine' onChange={this.handleChange}></input>
        <button className='confirmationButton' onClick={this.pickNames}>Filter</button>
        <span className='resultsBox filterStringRB'>{JSON.stringify(this.state.filteredArray)}</span>
      </div>
    )
  }
}

export default FilterString