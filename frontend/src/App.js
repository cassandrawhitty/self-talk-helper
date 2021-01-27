import './App.css';
import { Component } from 'react';
import Form from './Form';
import Journal from './Journal';
import Introduction from './Introduction';

class App extends Component {

  state= {
    date: "",
    dates: [],
    unrealisticThought: "",
    unrealisticThoughts: [],
    cognitiveDistortion: "",
    cognitiveDistortions: [],
    realisticReframe: "",
    realisticReframes: [],
  }

  addDate = (event) => {
    this.setState({date: event.target.value})
  }

  addUnrealisticThoughts = (event) => {
    this.setState({unrealisticThought: event.target.value})
  }

  addCognitiveDistortions = (event) => {
    this.setState({cognitiveDistortion: event.target.value})
    }

  addRealisticReframes = (event) => {
    this.setState({realisticReframe: event.target.value})
  }
  
  dateUnscramble = (string) => {
    let arrayOfNumbers = string.split("-")
    let date = arrayOfNumbers[1] + "/" + arrayOfNumbers[2] + "/" + arrayOfNumbers[0]
    return date
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({dates: [...this.state.dates, this.state.date]})
    this.setState({unrealisticThoughts: [...this.state.unrealisticThoughts, this.state.unrealisticThought]})
    this.setState({realisticReframes: [...this.state.realisticReframes, this.state.realisticReframe]})
  }

  // add strings to arrays
  // map over arrays in journal and render the entries to the page, possibly in components 
  // add multiple inputs to cognitive distortions 
  // unscramble the dates

  render(){
    return (
      <div className="App">
        <h1>Self-Talk Helper</h1>
        <Introduction />
        <Form 
          addUnrealisticThoughts={this.addUnrealisticThoughts} 
          addRealisticReframes={this.addRealisticReframes} 
          addDate={this.addDate} 
          addCognitiveDistortions={this.addCognitiveDistortions}
          handleSubmit={this.handleSubmit}
        />
        <h1>Your Self-Talk Helper Journal</h1>
        <Journal />
      </div>
    );
  }
}

export default App;
