import React from 'react';
import style from './styles/TodoList.css';

const TodoList = (props) => {
    let tasks = props.items.map((item) => <li key={item.id} className={style.TodoListItem}>{item.text}</li>)
        return(
            <ul className={style.TodoList}>{tasks}</ul>
        )
}

export default TodoList;