import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './List.css';
import { Link } from 'react-router-dom';
import print from './print.svg';


class List extends Component {


    render() {

    var savedIdeas = this.props.savedIdeas;
    var removeListCallback = this.props.removeListIdea;
    var resetIdeaCallback = this.props.resetIdea;

 
    console.log("Saved Ideas: " + savedIdeas);

    return ( 
        <div className="Idea Section">

            <div className="Idea">
             <div className="savedhead"><Link to={{ pathname: "/checklist", state: { savedIdeas: savedIdeas } }}><img src={print} />
                </Link>&nbsp;&nbsp;Saved Test Ideas&nbsp;<button className="nxtbtn" onClick={() => resetIdeaCallback()}>Reset</button>
                <ul className="idealist">{savedIdeas.map(function(idea, index) {
                    console.log("Idea: " + JSON.stringify(idea));
                    return (<li key={index}>{idea.idea}&nbsp;&nbsp;<button className="removebtn" onClick={() => removeListCallback(idea)}>x</button><br /><br /></li>);
                })}
                </ul>
            </div>
        </div>
    </div>
    );
    } 
}


/* List.propTypes = {
    removeListCallback: PropTypes.func,
    printListCallback: PropTypes.func,
    ideas: PropTypes.array
};

List.defaultProps = {
    idea: PropTypes.any,
    index: PropTypes.number
}; */

export default List;