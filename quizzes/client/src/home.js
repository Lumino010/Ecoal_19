import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

//import {quizzes, users} from './examples';
import {HTTP_SERVER_PORT_PICTURES, HTTP_SERVER_PORT} from './constants.js';
import Quiz from "./QuizzThumbnail.js";



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {quizzes : []};
    }



	componentDidMount(){
        this.loadData();            
              
  }



  async loadData() {
      const quizzes = (await axios.get(HTTP_SERVER_PORT + 'quizzes')).data;  // We need to wait for the response.
      this.setState({quizzes: quizzes});
      console.log(axios,'axios');
  }; 


    render() {
        // transform/map objects in quizzes into <Quizz q=> elemnts
        let quizze= this.state.quizzes.map((q,i)=> <Quiz key={i} quizz={q}/>);
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