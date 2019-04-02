import React from 'react';
import style from './styles/TodoForm.css';

class TodoForm extends React.Component {    
    constructor(props){
        super(props);
        this.state = {
            newTodoText: ''
        };
    }
    onChangeHandle(event) {
        this.setState({newTodoText: event.target.value});
    }
    onSubmitHandle(event) {
        event.preventDefault();
        this.props.addTodo(this.state.newTodoText);
    }
    render() {
        return(
            <form onSubmit={event => this.onSubmitHandle(event)} className={style.TodoForm}>
                <label htmlFor="newTodoText" className={style.TodoLabel}>Enter new task: </label>
                <input 
                    type="text"
                    value = {this.state.newTodoText}
                    id="newTodoText"
                    onChange = {event => this.onChangeHandle(event)}
                    className={style.TodoInput}/>
            </form>
        )
    }
}

export default TodoForm;