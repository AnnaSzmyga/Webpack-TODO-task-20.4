import React from 'react';
import style from './styles/Title.css';

const Title = (props) => {
    return(
        <div>
            <h1 className={style.appTitle}>ToDo App</h1>
            <h2 className={style.appSubtitle}>{props.tasksNumber} tasks to do!</h2>
        </div>
    )
}

export default Title;