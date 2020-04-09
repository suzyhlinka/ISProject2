import React from 'react';

const render_button = (task_id, talk_column, button_text, task_function) => {
    if (button_text && task_function){
        return(
            <div>
                <a href="#"
                   className="X"
                   onClick={onItemClick (task_id, task_column, task_function)}>
                    {button_text}
                </a>
            </div>
        );
    }
    else{
        return <div />
    }
}

const onItemClick = (task_id, task_column, task_function) =>{
    return () => {
        task_function(task_id, task_column);
    };
}

const GridItem = props => {
    return (
        <div className="item">
            <div className="item-body">
                <h4 className="item-title">
                    {props.title}
                </h4>
                <div className="item-text">
                    <div>ID: {props.id}</div>
                    <div>Type: {props.type}</div>
                    {render_button(props.id, props.column, props.last_text, props.last_function)}
                </div>
            </div>
        </div>
    )
}

export default GridItem;