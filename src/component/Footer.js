import React from 'react';
import List from "./List.js";

export default function Footer() {



    /*function searchBarFilter(){
        var inputHandler = (e)=>{
        var lowerCase = e.target.value.toLowerCase();
        }
    
        const filteredTasks = List.tasks.filter((taskelement) => {
        if (this.props.input === "") {
            return taskelement;
        }
        else{
            return taskelement.title.toLowerCase().includes(this.props.input);
        }});
        
        List.displayTasks(filteredTasks); // à modifier
    }*/


    return (
        <footer>
        <div id='footerContent'>
            <input type='text' id='searchBar' placeholder='Search a task' onChange={null/*searchBarFilter.inputHandler*/}/>
            <button id='+' onClick={null/*List.handleAddTask(this.props)*/}>+</button>
        </div>
        </footer>
    );
}