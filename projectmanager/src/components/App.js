//import
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import GridView from './GridView';

class App extends React.Component {
    state={
        view: 'grid',
        task_list: [],
        sorted_tasks: {
            todo_items: [],
            inProgress_items: [],
            review_items: [],
            done_items: []
        }
    }

    componentDidMount() {
        this.getData();
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

export default App;