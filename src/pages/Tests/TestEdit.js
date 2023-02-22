import './_styles/style.css'

import { useNavigate, useParams } from 'react-router-dom';

import AddTaskIcon from 'assets/add-frame.png'
import { RiAddCircleLine } from 'react-icons/ri'
import SaveTestIcon from 'assets/save-file.png'
import TaskModel from 'models/TaskModel';
import TasksList from 'components/TasksList';
import TestHeader from './_components/TestHeader';
import styled from 'styled-components';
import { useState } from 'react';

const NewTaskButton = styled.button`
    display: flex;
    align-items: center;
    column-gap: 5px;

    font-size: 1.3em;
    font-weight: 500;

    padding: 10px 20px;
    margin: 10px;

    border-radius: 10px;
    background-color: #ccc;
`;

function TestEdit(props) {
    const {
        getTestById = () => { },
        updateTestById = () => { },
    } = props;

    const navi = useNavigate();
    const { id } = useParams();
    const test = getTestById(id);

    const [tasks, setTasks] = useState([...test.tasks]);

    const addEmptyTask = () => {
        setTasks([...tasks, new TaskModel()]);
    }

    const updateTask = updatedTask => {
        const indexToUpdate = tasks.indexOf(tasks.filter(t => t.id === updatedTask.id)[0]);

        setTasks(old => {
            old[indexToUpdate] = updatedTask;
            return old;
        });
    }

    const saveTest = () => {
        updateTestById({ ...test, tasks: tasks });
        navi("/dashboard");
    }

    return (
        <div className="test-edit-view-container full-size-view-container">
            <TestHeader {...test}></TestHeader>

            <div className="full-size-view-main-content test-edit-view">
                <div className='container'>
                    <TasksList tasks={tasks} updateTask={updateTask} editable></TasksList>
                    <NewTaskButton onClick={addEmptyTask}><img alt='button_icon' className='button-icon' src={AddTaskIcon}></img> Dodaj zadanie</NewTaskButton>
                </div>
            </div>

            <div className='view-bottom-menu'>
                <button onClick={saveTest} className='view-button'><img alt='button_icon' className='button-icon' src={SaveTestIcon} ></img>Zapisz zmiany</button>
            </div>
        </div>
    )
}

export default TestEdit;