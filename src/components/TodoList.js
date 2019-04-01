import React from 'react';
import style from './styles/TodoList.css';

const TodoList = (props) => {
    let todoItems = props.items.map((item) => <li key={item.id} onClick={() => props.removeItem(item.id)} className={style.TodoListItem}>{item.text}</li>)
    return(
        <ul className={style.TodoList}>{todoItems}</ul>
    )
}

export default TodoList;