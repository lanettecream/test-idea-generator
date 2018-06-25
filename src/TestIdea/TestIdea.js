import React, { Component } from 'react';
import './TestIdea.css';

import PropTypes from 'prop-types';


class TestIdea extends Component {
  
  render() {
    const idea = this.props.idea;
    console.log(idea.id + ". " + idea.idea + " from category " + idea.category);


    return (
      <div className=".random-container">
        <div className=".randomideas" key="{idea.id}">
            {
              <h3>{idea.idea}&nbsp;&nbsp;<button className="addbtn" onClick={() => this.props.addSavedIdea(idea)}>Save</button>&nbsp;<button className="nxtbtn" onClick={() => this.props.nextIdea()}>Skip</button></h3>
            }
        </div>

        {/* <div className="Idea" key>
          <header className="Idea-text">{idea.idea}</header>
          <div className="Idea-category">${idea.category}
          </div>
          <div className="Idea-category">
                  <img src={room.image} alt={Idea["Category"]} />
                  </div>
          <button type="button" id="AddIdea__button" onClick={() => addIdeaAction(idea)}>Add Idea</button>
        </div> */}
      </div>
    );
  }
}

  TestIdea.propTypes = {
      id: PropTypes.number,
      Idea: PropTypes.string,
      Category: PropTypes.string,
    }

  export default TestIdea;