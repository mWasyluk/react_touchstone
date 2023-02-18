import React, { useEffect, useState } from 'react'

import TaskModel from 'models/TaskModel';
import TaskPart from './TaskPart';

export default function Task({ task = new TaskModel(), editable = false, updateTask = () => { } }) {
    const [question, setQuestion] = useState(task.question);
    const [answer, setAnswer] = useState(task.answer);
    const [points, setPoints] = useState(task.points);

    const questionProps = {
        header: 'Pytanie:',
        defaultValue: question,
        valueCallback: value => { setQuestion(value) },
        textareaProps: !editable && { disabled: true, spellCheck: false, style: { backgroundColor: 'rgba(0, 0, 0, 0.2)', color: 'white' } },
    }

    const answerProps = {
        header: editable ? 'Oczekiwana odpowiedź:' : "Odpowiedź:",
        defaultValue: editable ? answer : '',
        valueCallback: value => { setAnswer(value) },
        textareaProps: {},
    }

    const pointsProps = {
        header: 'Punktów do zdobycia:',
        defaultValue: points,
        valueCallback: value => { setPoints(value) },
        textareaProps: { maxLength: 2, spellCheck: false, disabled: !editable, style: { width: '3em', textAlign: 'center', color: !editable && 'white', backgroundColor: !editable && 'rgba(0, 0, 0, 0.2)' } },
    }

    useEffect(() => {
        const updatedTask = { question, answer, points };
        updateTask(updatedTask);
    }, [question, answer, points])

    return (
        <div className='task-editor'>
            <TaskPart {...questionProps}></TaskPart>
            <TaskPart {...answerProps}></TaskPart>
            <TaskPart {...pointsProps}></TaskPart>
        </div>
    )
}