import React from 'react';

class ViewSwitch extends React.Component{
    checkTab(tab){
        if (tab === this.props.cur_view){
            return 'active';
        }else{
            return '';
        }
    }

    clickTab(event, view_type){
        event.preventDefault();
        this.props.changeView(view_type);
    }

    render(){
        return(
            <div className = "navigation">
                <ul className = "nav_list">
                    <li className = "nav_item">
                        <a className = {this.checkTab('grid')} onClick = {event => this.clickTab(event, 'grid')}>Grid View</a>
                    </li>
                    <li className = "nav_item">
                        <a className = {this.checkTab('list')} onClick = {event => this.clickTab(event, 'list')}>List View </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default ViewSwitch;