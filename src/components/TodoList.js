import React from 'react';
import Todo from '../components/Todo';
import style from './styles/TodoList.css';

const TodoList = (props) => {
    let todoItems = props.items.map((item) => <Todo key={item.id} text={item.text} id={item.id} removeTodo={props.removeTodo} />)
    return(
        <ul className={style.TodoList}>{todoItems}</ul>
    )
}

export default TodoList;