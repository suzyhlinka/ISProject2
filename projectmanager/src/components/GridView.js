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

}

export default GridView;