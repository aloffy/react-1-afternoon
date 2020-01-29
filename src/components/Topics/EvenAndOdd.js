import React, { Component } from 'react'

class EvenAndOdd extends Component {
  constructor(){
    super()
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }

  separateNumbers = () => {
    this.setState({
      evenArray: this.state.userInput.split(',').filter(el => el % 2 === 0),
      oddArray: this.state.userInput.split(',').filter(el => el % 2 === 1)
    })
  }

  render(){
    return(
      <div className='puzzleBox evenAndOddPB'>
        <h4>Evens and Odds</h4>
        <input className='inputLine' onChange={this.handleChange}></input>
        <button className='confirmationButton' onClick={this.separateNumbers}>Separate</button>
        <span className='resultsBox'> Evens: {JSON.stringify(this.state.evenArray)}</span>
        <span className='resultsBox'> Odds: {JSON.stringify(this.state.oddArray)}</span>
      </div>
    )
  }
}

export default EvenAndOdd