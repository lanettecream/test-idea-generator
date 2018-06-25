import React, { Component } from 'react';
import './List.css';
import { Link } from 'react-router-dom';
import testlogo from './testingideaslogo.svg';

class Checklist extends Component {

     render() {

    var passedState = this.props.location.state;
    var savedIdeas = passedState.savedIdeas;

    console.log("Saved Ideas: " + savedIdeas);

    return ( 
        <div className="Test-container">
        <div className="clIdeaSection">
         <header className="Test-header">
          <img src={testlogo} alt='TestIdealogo' />
          </header>
            <div className="Idea">
                <ul className="checklist">{savedIdeas.map(function(idea, index) {
                    console.log("Idea: " + JSON.stringify(idea));
                    return (<li key={index}>{idea.idea}&nbsp;&nbsp;<br /><br /></li>);
                })}
                </ul>
            </div>
            <Link to={{ pathname: "/", state: { savedIdeas: savedIdeas } }}>Go Back</Link>
        </div>
    </div>
    );
    } 
}

export default Checklist;