import React from 'react';


export default class Task extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: props.id,
            title: props.title,
            isChecked: props.isChecked,
        }
    }
    render(){
        return (
            <li key={this.state.id}>
                <label>{this.state.title}</label>
                <input type="checkbox" checked={this.state.isChecked} onChange={() => this.handleCheckTask(this.state.id)} />
            </li>
        );
    }
}