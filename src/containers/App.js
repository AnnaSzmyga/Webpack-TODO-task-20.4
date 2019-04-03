import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import {hot} from 'react-hot-loader';

class App extends React.Component {
    constructor(props){
        super(props);
        this.removeTodo = this.removeTodo.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.state = {
            data: [
                {id: 1, text: 'cook dinner'},
                {id: 2, text: 'wash dishes'},
                {id: 3, text: 'clean the house'}
            ]
        };
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
        console.log(this.state.data);
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    render() {
        console.log(this.state.data);
        return (
            <div className={style.TodoApp}>
                <Title tasksNumber={this.state.data.length} />
                <TodoForm addTodo={this.addTodo} />
                <TodoList items={this.state.data} removeTodo={this.removeTodo} />
            </div>
        );
    }
}

export default hot(module)(App);