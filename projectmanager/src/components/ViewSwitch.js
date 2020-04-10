import React from 'react';

class ViewSwitch extends React.Component{
    checkTab(tab){
        if (tab === this.props.cur_view){
            return 'active';
        }else{
            return '';
        }
    }

    clickTab(){

    }

    render(){
        return(
            <div className = "navigation">
                <ul className = "nav_list">
                    <li className = "nav_item">
                        <a className = ""> Grid View</a>
                    </li>
                    <li className = "nav_item">List View</li>
                </ul>
            </div>
        )
    }
}