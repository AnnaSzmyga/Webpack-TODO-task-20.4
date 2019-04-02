import React from 'react';

const TodoForm = (props) => {
    
    return(
        <form onSubmit={() => props.addItem(props.text)} >
            <label htmlFor="newTodoText">Enter new task</label>
            <input 
                value = {props.text}
                id="newTodoText"
                onChange = {event => {props.onChangeHandle(event)}/>
        </form>
    )
}