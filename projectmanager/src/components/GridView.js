import React from 'react';
import GridItem from "./GridItem";

const columns = ["todo", "in-progress","review", "done"];

class GridView extends React.Component{
    constructor(props){
        super(props);
    }


    searchForItem (task_id, task_column){
        if (task_column === 'in-progress'){
            return this.props.items.inProgress_items.find(item => item.id === task_id);;
        }
        else{
            return this.props.items[task_column].find(item => item.id === task_id);;
        }
    }

    goBack(task_id, task_column) {
        let item = this.searchForItem(task_id, task_column);
        let column_pos = columns.findIndex(name => item.column === name);
        if (column_pos > 0){
            column_pos -= 1;
            item.column = columns[column_pos];
        }
    }

    render(){

    }
}

export default GridView;