import React, { Component } from 'react';
import TestIdea from './TestIdea';
import './TestIdea.css';

class TestIdeas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testIdea: {},
            entryInput: ''
        }
    }

    onInputChange = (e) => {
        e.preventDefault();
        const newValue = e.target.value;
        this.setState(() => {
            return {
                entryInput: newValue
            };
        })
    }

    addEntry = (e) => {
        e.preventDefault();
        alert('Implement addEntry');
        this.setState(() => {
            return {
                entryInput: ''
            };
        })
    }

    render() {
        return (
            <div>
                <h1>My Test Idea</h1>
                {Object.keys(this.state.testIdea).map((key) => {
                    return <TestIdea key={key} entry={this.state.testIdea[key]} />;
                })}
                <form className="custom-test-form" onSubmit={this.addEntry}>
                    <textarea onChange={this.onInputChange} value={this.state.entryInput} />
                    <button className="journal-form__button" type="submit">Add Entry</button>
                </form>
            </div>
        );
    }
}

export default TestIdeas;