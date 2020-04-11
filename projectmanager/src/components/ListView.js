import React from 'react';
import ListItem from './ListItem';
import '../styling/ListView.css';

class ListView extends React.Component {
    state = {
        sort: 'title',
        item_type: '',
        item_status: ''
    }

    changeStatus(item_status) {
        this.setState({item_status});
    }

    changeType(item_type) {
        this.setState({item_type})
    }

    changeSort(sort_type) {
        this.setState({sort_type});
    }

    getAllItems(item) {
        return (
            <ListItem title={item.title} key={item.id} type={item.type}
                      column={item.column} id={item.id}/>
        );
    }

    render() {
        const all_list_items = this.props.items.map(post => this.getAllItems(post));
        return (
            <div className="list_view">
                <div className="list_view_title_group">
                    <h2 className="list_view_title">
                        Title
                    </h2>
                    <h2 className="list_view_title">
                        Status
                    </h2>
                    <h2 className="list_view_title">
                        Type
                    </h2>
                </div>
                <ul className="list">
                    {all_list_items}
                </ul>
            </div>
        );
    }

}

export default ListView;