//import
import React from 'react';
import axios from 'axios';
import GridView from './GridView';

class App extends React.Component {
    state={
        view: 'grid',
        task_list: [],
        sorted_items: {
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
                this.setState({all_items: response.data, sorted_items: this.sortItems(response.data)});
            }).catch (error => {
            this.setState({errorMessage: error.message});
        });
    }

    sortItems(item){
        return {
            todo_items: item.filter(post => post.column === 'todo'),
            inProgress_items: item.filter(post => post.column === 'in-progress'),
            review_items: item.filter(post => post.column === 'review'),
            done_items: item.filter(post => post.column ==='done')
        }
    }

    updateItem(indiv_item){
        let all_items = this.state.all_items;
        const cur_pos = all_items.findIndex(item => item.id === indiv_item.id);
        all_items[cur_pos] = indiv_item;

        const sorted_items = this.sortItems(all_items);
        this.setState({all_items, sorted_items});
    }

    render(){
        return (<GridView items = {this.state.sorted_items} updateItem = {item => this.updateItem(item)}/>
        );
    }

}

export default App;