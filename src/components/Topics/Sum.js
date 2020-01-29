import React, { Component } from 'react'

class Sum extends Component {
  constructor(){
    super()
    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    }
  }

  handleChange1 = (event) => {
    this.setState({
      number1: parseInt(event.target.value, 10)
    })
  }
  handleChange2 = (event) => {
    this.setState({
      number2: parseInt(event.target.value, 10)
    })
  }

  addNums = () => {
    this.setState({
      sum: this.state.number1 + this.state.number2
    })
  }

  render(){
    return(
      <div className='puzzleBox sumPB'>
        <h4>Sum</h4>
        <input className='inputLine' onChange={this.handleChange1}></input>
        <input className='inputLine' onChange={this.handleChange2}></input>
        <button className='confirmationButton' onClick={this.addNums}>Separate</button>
        <span className='resultsBox'> Sum: {JSON.stringify(this.state.sum)}</span>
      </div>
    )
  }
}

export default Sum