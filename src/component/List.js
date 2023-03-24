import React from 'react';
import Task from './Task.js';


export default class List extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            tasks: [
                {"id":"1","title":"1.Idée","isChecked":true},
                {"id":"2","title":"2.Marché","isChecked":true},
                {"id":"3","title":"3.Wireframe","isChecked":true},
                {"id":"4","title":"4.Design","isChecked":true},
                {"id":"5","title":"5.Landingpage","isChecked":true},
                {"id":"6","title":"6.Développement","isChecked":false},
                {"id":"7","title":"7.Publish","isChecked":false},
                {"id":"8","title":"8.Pub","isChecked":false},
                {"id":"9","title":"9.Feedback","isChecked":false}
            ]
        }
    }
    
    handleAddTask = (e) => {
        e.preventDefault();
        this.setState({
            tasks: [...this.state.tasks, {id: this.state.id, title: this.state.title, isChecked: this.state.isChecked}]
        });
    }

    getLength() {
        return this.state.tasks.length;
    }

    getNbChecked() {
        let nbChecked = 0;
        this.state.tasks.forEach((task) => {
            if(task.isChecked){
                nbChecked++;
            }
        });
        return nbChecked;
    }


    render() {
        return this.state.tasks.map((task) =>
            <Task value={task.id || task.title || task.isChecked}/>
        );
    }
}