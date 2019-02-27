import React, {Component} from 'react';
import Home from "./home.js";
import {quizzes} from "./examples";
import {HTTP_SERVER_PORT_PICTURES, HTTP_SERVER_PORT} from "./constants";
import {Link} from 'react-router-dom';


import axios from 'axios';

class createQuiz extends Component {
    constructor(props) {
        super(props);
       

    }
    

    sendQuiz(e){
             e.preventDefault();
        let qname=document.getElementById('quizname').value;
        let qkey=document.getElementById('quizkey').value.split(";");
             const selectedFile = e.target.image.files[0];
             const data = new FormData();
             data.append('file', selectedFile, selectedFile.name);
             console.log(selectedFile);
             console.log(data);
             axios.post(HTTP_SERVER_PORT + "upload", data).then(res => console.log("Res", res));
        axios.post(HTTP_SERVER_PORT + 'createquiz', {  // The json object to add in the collection
            name:qname,
            published:true,
            keywords:qkey
            
         }).then(res => {
           if (res.status === 200)
           console.log("test");
     //        this.loadData();                     // If everything is ok, reload data in order to upadate the component
           else
             console.log("Failed to add quiz");
         }).catch(err => console.log("Error =>", err));
    }



    render() {
      return (
        <div>
        <form onSubmit={e => this.sendQuiz(e)}>

        <h3>Create a new Quiz !</h3>

        <label htmlFor="name">Quiz name :</label>
        <input type="text" id="quizname" name="name" required></input>
        <br></br>
        <label htmlFor="image">Quiz picture:</label>
        <input type="file" id="quizimage" name="image" accept="image/png, image/jpeg"></input>
        <br></br>
        <label htmlFor="keywords">keywords :</label>
        <input type="text" id="quizkey" name="keywords" required></input>
        <br></br>
        <input type="submit"  value="Send"/>
        </form>
    </div>
      );
   }
 }
 
 export default createQuiz;