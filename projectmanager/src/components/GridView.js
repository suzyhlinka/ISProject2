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
            ////
        }
    }

    goNext(task_id, task_column){
        let item = this.searchForItem(task_id, task_column);
        let column_pos = columns.findIndex(name => item.column ===name);

        if (column_pos < columns.length()){
            column_pos += 1;
            item.column = columns[column_pos];
            ////
        }
    }

    renderItemColumn(post, prev_text, next_text){
        return (
            <GridItem id = {post.id}
                      key = {post.id}
                      title = {post.title}
                      type = {post.type}
                      column = {post.column}
                      prev_text = {prev_text}
                      goBack = {this.goBack}
                      next_text = {next_text}
                      goNext = {this.goNext} />
        );
    }

    render(){
        const todo_list = this.props.items.todo_items.map(post => this.renderItemColumn(post, "",'In Progress ->'));
        const inProgress_list = this.props.items.inProgress_items.map(post => this.renderItemColumn(post, "<- Send back to In Progess",'Request for Review ->'));
        const review_list = this.props.items.review_items.map(post => this.renderItemColumn(post, "<- Needs Review",'Complete ->'));
        const done_list = this.props.items.done_items.map(post => this.renderItemColumn(post, "<- Not Done",""));

        return (
            <div className = "gridView">
                <div className = "gridView-column gridView-column-todo">
                    <h3 className = "gridView-column-title">
                        To-Do
                    </h3>
                    <div className = "gridView-item-container">
                        {todo_list}
                    </div>
                </div>
                <div className = "gridView-column gridView-column-inProgress">
                    <h3 className = "gridView-column-title">
                        In Progress
                    </h3>
                    <div className = "gridView-item-container">
                        {inProgress_list}
                    </div>
                </div>
                <div className = "gridView-column gridView-column-review">
                    <h3 className = "gridView-column-title">
                        Under Review
                    </h3>
                    <div className = "gridView-item-container">
                        {review_list}
                    </div>
                </div>
                <div className = "gridView-column gridView-column-done">
                    <h3 className = "gridView-column-title">
                        Done
                    </h3>
                    <div className = "gridView-item-container">
                        {done_list}
                    </div>
                </div>
            </div>

        );

    }
}

export default GridView;