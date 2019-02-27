import React, {Component} from 'react';
import Home from "./home.js";
import {quizzes} from "./examples";
import {HTTP_SERVER_PORT_PICTURES, HTTP_SERVER_PORT} from "./constants";
import {Link} from 'react-router-dom';

import axios from 'axios';





class Question extends Component{
    render(){


        return (
            <div>
                <form onSubmit={e => this.props.nextQuestion(e)}>

                <h3>{this.props.q.question}</h3>
                <ul>
                {this.props.q.txtAnswers.map( x =>{
                   return <li> <input type='checkbox' id={x} name={x}/>  <label for={x}>{x}</label></li>

                })}
                {this.props.q.imgAnswers.map( x =>{
                        return <li> <input type='checkbox' id={x} name={x}/>  <label for={x}><img src={HTTP_SERVER_PORT_PICTURES + x} /></label></li>

                })}
                </ul>
                    <input type="submit"  value="Next question"/>
                </form>
            </div>
        );
    }

}

class Quizz extends Component{
    constructor(props) {
        super(props);
        this.state = {
            current : 0,
            score : 0,
			quizz : null
        };
        this.NextQuestion = this.NextQuestion.bind(this);
		}
		
		componentDidMount(){
			  this.loadData();            
					 
		}



		async loadData() {
            console.log(this.props.match.params.id);
           const quizz = (await axios.get(HTTP_SERVER_PORT + 'quizz/'+this.props.match.params.id)).data;  // We need to wait for the response.
          
           console.log(quizz);
			this.setState({quizz: quizz});
        }; 
        
    isEquivalent(a, b) {
        if (a.length != b.length) {
            return false;
        }

        for (var i = 0; i < a.length; i++) {

            if (a[i] !== b[i]) {
                return false;
            }
        }
        return true;
    }



    NextQuestion(e) {
            let choices = [];
            for(let i=0;i<e.target.elements.length;i++){
                if(e.target.elements[i].checked){
                    choices.push(i);
                }
            }


            if(this.isEquivalent(choices,this.state.quizz.questions[this.state.current].solutions)){
                let newScore = this.state.score + this.state.quizz.questions[this.state.current].points;
                
                this.setState({score : newScore});
                

            }

            e.preventDefault();
            let Newcurr = this.state.current + 1;

            this.setState({current : Newcurr});
            


    }

    render(){
			if(this.state.quizz==null){
				return(<p>loading</p>)
			}
				
        if(this.state.current == this.state.quizz.questions.length){

            return (
                <div>
										Fin du quizz : score : {this.state.score}
										<br></br>
										<Link  to={'/'}>Back to home</Link>
										
                </div>
            )
        }
        return (
        <div>
            {this.state.quizz.name}
            <Question q={this.state.quizz.questions[this.state.current]} nextQuestion={this.NextQuestion}/>
        </div>
        )
    }

}

export default Quizz;



