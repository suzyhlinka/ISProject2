import React from 'react';

import '../styling/ListItem.css';

const ListItem = props => {
    return (
        <div className = "list_item">
            <li className="">
                <div className="list_item_column_title">
                    {props.title}
                </div>
                <div className="list_item_column_column">
                    {props.column}
                </div>
                <div className="list_item_column_type">
                    {props.type}
                </div>
            </li>
        </div>
    );
}

export default ListItem;