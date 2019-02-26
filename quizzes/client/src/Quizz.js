import React, {Component} from 'react';
import Home from "./home.js";
import {quizzes} from "./examples";
import {HTTP_SERVER_PORT_PICTURES} from "./constants";
import {Link} from 'react-router-dom';







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
        this.quizz = quizzes.filter(q=> q._uid == this.props.match.params.id)[0];
        this.state = {
            current : 0,
            score : 0

        };
        this.NextQuestion = this.NextQuestion.bind(this);
    }

    isEquivalent(a, b) {
        console.log("A");
        // Create arrays of property names
        if (a.length != b.length) {
            return false;
        }
        console.log("B");

        for (var i = 0; i < a.length; i++) {

            if (a[i] !== b[i]) {
                return false;
            }
        }

        console.log("C");

        // If we made it this far, objects
        // are considered equivalent
        return true;
    }



    NextQuestion(e) {
            let choices = [];
            for(let i=0;i<e.target.elements.length;i++){
                if(e.target.elements[i].checked){
                    choices.push(i);
                }
            }


            if(this.isEquivalent(choices,this.quizz.questions[this.state.current].solutions)){
                let newScore = this.state.score + this.quizz.questions[this.state.current].points;
                console.log(newScore);
                this.setState({score : newScore});
                console.log(newScore);

            }

            e.preventDefault();
            let Newcurr = this.state.current + 1;

            this.setState({current : Newcurr});
            console.log(choices);


    }

    render(){
        if(this.state.current == this.quizz.questions.length){

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
            {this.quizz.name}
            <Question q={this.quizz.questions[this.state.current]} nextQuestion={this.NextQuestion}/>
        </div>
        )
    }

}

export default Quizz;



