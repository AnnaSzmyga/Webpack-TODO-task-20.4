import React from 'react';
import style from './styles/Todo.css';


const Todo = (props) => {
    return(
        <li onClick={() => props.removeTodo(props.id)} className={style.TodoListItem}>{props.text}</li>
    )
}

export default Todo;