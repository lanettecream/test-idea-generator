import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TestIdea from './TestIdea/TestIdea.js';
import data from './TestIdeas.json';
import List from './List.js';


class TestIdeasHome extends Component {

    constructor(props) {
      super(props);
  
   
      let randomIdea = this.randomIdea();
  
      var passedState = this.props.location.state;
      var savedIdeas = [];

      if (passedState != null && passedState.savedIdeas != null) {
          savedIdeas = passedState.savedIdeas;
      }

      this.state = {
        savedIdeas: savedIdeas,
        randomIdea: randomIdea,
      };
    }
  
  
  
  
    addSavedIdea = (idea) => {
      console.log("add idea to saved list: " + JSON.stringify(idea));
      this.setState((prevState) => {
        let ideas = prevState.savedIdeas;
        let nextIdea = this.randomIdea();
  
        if (ideas == null) {
          ideas = [];
        }
  
        ideas.push(idea);
  
        return { savedIdeas: ideas, randomIdea: nextIdea };
      });
  
  
    }
  
  
    removeSavedIdea = (idea) => {
      console.log(idea);
      this.setState((prevState) => {
        let savedIdeas = prevState.savedIdeas;
        let filteredIdeas = savedIdeas.filter(item => item.id !== idea.id);
        return { savedIdeas: filteredIdeas, randomIdea: prevState.randomIdea };
      });
    }
  
    randomIdea = () => {
      var ideaIndex = Math.floor(Math.random() * data.length);
      var randomIdea = data[ideaIndex];
      return randomIdea;
    };
  
    updateRandomIdea = () => {
      let nextIdea = this.randomIdea();
      this.setState((prevState) => {
        return { savedIdeas: prevState.savedIdeas, randomIdea: nextIdea };
      });
    }

    resetIdea = () => {
        let emptySavedIdeas = [];
        this.setState((prevState) => {
            return { savedIdeas: emptySavedIdeas, randomIdea: prevState.randomIdea };
        });
    }
  
  
  
    render() {
    return (
        <div className="App-container" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="TestIdealogo" />
          <h1 className="App-title">Testing Idea Generator</h1>
          <h2 className="App-tagline">Prompt Quality</h2>
        </header>
        <p className="App-intro">Randomly selected Test Idea</p>
        <div className="content">
          <h1 className="randomheading">
            <TestIdea idea={this.state.randomIdea} addSavedIdea={this.addSavedIdea} nextIdea={this.updateRandomIdea} />
          </h1>
          <h3>Save to add to the checklist, or Skip to get the next idea. Click the Printer icon to see a printable test checklist.</h3>
        </div>
        <h1><List savedIdeas={this.state.savedIdeas} removeListIdea={this.removeSavedIdea} printList={this.printList} resetIdea={this.resetIdea} /></h1>
        </div>
      );
    }
  }
export default TestIdeasHome;