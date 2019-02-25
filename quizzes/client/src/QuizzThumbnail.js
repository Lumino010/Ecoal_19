import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {quizzes, users} from './examples';
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';



class Quiz extends Component {

    render() {


	return (
    	  <div>
            <h1>{this.props.quizz.name}</h1>
	        <Link  to={'/quizz/'+this.props.quizz._uid}><img src={HTTP_SERVER_PORT_PICTURES + this.props.quizz.icon} /></Link>  
	    </div>
	);
    }
}

export default Quiz;