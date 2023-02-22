import React from 'react'
import Task from './_components/Task'

export default function TasksList({ tasks = [], updateTask = () => { }, editable }) {
    return (
        <>
            {tasks && tasks.map((task, index) =>
                <div key={index}>
                    <Task task={task} updateTask={updateTask} editable={editable}></Task>
                    {index < (tasks.length - 1) && <div className='frames-separator'></div>}
                </div>
            )}
        </>
    )
}