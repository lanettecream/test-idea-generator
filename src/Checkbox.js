import React, { Component } from 'react';
//import TestIdea from './TestIdea/TestIdea.js';
//import App from './App.js';
// import { Link } from 'react-router-dom';
//import List from './List.js';
import PropTypes from 'prop-types';

const items = [
    'Performance',
    'Error Handling',
    'Security',
    'Functionality',
    'Input/Output',
    'Usability',
    'Accessability',
    'Mobile',
    'Globalization',
    'Testability',
    'Miscellaneous',
  ];

class Checkbox extends Component {
  state = {
    isChecked: false,
  }

  toggleCheckboxChange = () => {
    const { handleCheckboxChange, label } = this.props;

    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked,
      }
    ));

    handleCheckboxChange(label);
  }

  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    for (const checkbox of this.selectedCheckboxes) {
      console.log(checkbox, 'is selected.');
    }
  }

  createCheckbox = label => (
    <Checkbox
            label={label}
            handleCheckboxChange={this.toggleCheckbox}
            key={label}
        />
  )

  createCheckboxes = () => (
    items.map(this.createCheckbox)
  )

  render() {
    const { label } = this.props;
    const { isChecked } = this.state;

    return (
      <div className="checkbox">
        <label>
          <input
                            type="checkbox"
                            value={label}
                            checked={isChecked}
                            onChange={this.toggleCheckboxChange}
                        />

          {label}
        </label>
        <div className="container">
            <div className="row">
              <div className="col-sm-12">
              {this.createCheckboxes()}
                <form onSubmit={this.handleFormSubmit}>
                  

                  <button className="addbtn" type="submit">Get Test Ideas</button>
                </form>
              </div>
            </div>
        </div>
      </div>
    );
  }
}



Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
};


export default Checkbox;
