import React from 'react'
import style from './style.module.css'
const Footer = ({ countTasks, tasks }) => {
    let counter = 0;
    tasks.length && tasks.map(task => task.isCompleted ? counter++ : '')
    return (
        <div className={style.counterContainer} title='footer'>
            <div className="count-tasks">Tasks {countTasks}</div>
            <div className="completed-tasks">Completed Tasks {counter}</div>
        </div>)
}
export default Footer;