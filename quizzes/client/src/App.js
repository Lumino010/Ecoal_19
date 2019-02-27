

import React, {Component} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Home from "./home.js";
import About from "./about.js";
import Quizz from "./Quizz.js";
import Quizzes from "./QuizzThumbnail.js";
import createQuiz from "./createquiz.js";

class App extends Component {
   render() {
     return (
       <BrowserRouter>
         <div>
           <Switch>
             <Route exact={true} path="/" component={Home} />
			 <Route exact={true} path="/quizz/:id" component={Quizz}/>
             <Route exact={true} path="/about" component={About} />
             <Route exact={true} path="/createquiz" component={createQuiz} />
             <Route path="*" component={() => <p>Page Not Found</p>} />
           </Switch>
         </div>
       </BrowserRouter>
     );
  }
}

export default App;
