import React, {Component} from 'react';

import {quizzes, users} from './examples';
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';

class question extends Component {

    render() {
	return (
    	  <div>
	    About us {this.props.match.params.id}
	  </div>
	);
    }
}

class Quizz extends Component {

    render() {
	return (
    	  <div>
	    About us {this.props.match.params.id}
	  </div>
	);
    }
}

export default Quizz;