import React from 'react';
import style from './styles/Title.css';

class Title extends React.Component {
    render() {
        return(
            <div>
                <h1 className={style.appTitle}>ToDo App</h1>
                <h2 className={style.appSubtitle}>{this.props.tasksNumber} tasks to do!</h2>
            </div>
        )
    }
}

export default Title;