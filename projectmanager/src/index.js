//import
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    getData(){
        axios.get('http://my-json-server.typicode.com/bnissen24/project2DB/posts')
            .then(response => {
                this.setState({tasks: response.data});
            }).catch (error => {
                this.setState({errorMessage: error.message});
        });
    }
}

//render react component into DOM