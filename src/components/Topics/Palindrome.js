import React, { Component } from 'react'

class Palindrome extends Component {
  constructor(){
    super()
    this.state = {
      userInput: '',
      palindrome: ''
    }
  }
  
  handleChange = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }

  isPalindrome = () => {
    this.setState({
      palindrome: this.state.userInput.split('').reverse().join('') === this.state.userInput ? "yes" : 'no'
    })
  }

  render(){
    return(
      <div className='puzzleBox filterStringPB'>
        <h4>Palindrome</h4>
        <input className='inputLine' onChange={this.handleChange}></input>
        <button className='confirmationButton' onClick={this.isPalindrome}>Check</button>
      <span className='resultsBox'>{JSON.stringify(this.state.palindrome)}</span>
      </div>
    )
  }
}

export default Palindrome