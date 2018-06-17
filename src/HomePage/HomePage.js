import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Test Idea Generator</h1>
                <p>Welcome to the test idea generator.</p>
                <Link to="/testideas">Saved test ideas</Link>
            </div>
        );
    }
}

export default HomePage;