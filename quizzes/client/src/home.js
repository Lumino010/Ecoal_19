import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {quizzes, users} from './examples';
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';
import Quiz from "./QuizzThumbnail.js";



class Home extends Component {




    render() {
        // transform/map objects in quizzes into <Quizz q=> elemnts
        let quizze= quizzes.map((q,i)=> <Quiz key={i} quizz={q}/>);
	return (
    	  <div>
	    Hey guys!!
        <Link  to={'/about'}>About page</Link>
        {quizze}
	  </div>
	);
    }
}

export default Home;