import React, { useState } from 'react'

import Task from './_components/Task'

export default function TasksList({ tasks: tasksProp = [], editable }) {
    const [tasks, setTasks] = useState(tasksProp);

    const updateTask = updatedTask => {
        const matchingTask = tasks.filter(t => t.id === updatedTask.id)[0];

        if (!matchingTask) {
            console.error("Task with the given ID does not exist. ID:", updatedTask.id)
            return;
        }

        const allTasks = tasks;
        const matchingTaskIndex = allTasks.indexOf(matchingTask);
        allTasks[matchingTaskIndex] = updatedTask;

        setTasks(allTasks);
    }

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