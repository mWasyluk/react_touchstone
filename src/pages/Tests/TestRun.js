import { useNavigate, useParams } from 'react-router-dom';

import CheckedTestImage from 'assets/checked-file.png'
import TasksList from 'components/TasksList';
import TestHeader from './_components/TestHeader';

function TestRun(props) {
    const {
        getTestById = () => { },
        updateTestById = () => { },
    } = props;

    const navi = useNavigate();
    const { id } = useParams();
    const currentTest = getTestById(id)

    const saveRun = () => {
        updateTestById(currentTest);
        navi("/dashboard");
    }

    return (
        <div className="test-edit-view-container full-size-view-container">
            <TestHeader {...currentTest}></TestHeader>

            <div className="full-size-view-main-content test-edit-view">
                <div className='container'>
                    <TasksList tasks={currentTest.tasks}></TasksList>
                </div>
            </div>

            <div className='view-bottom-menu'>
                <button onClick={saveRun} className='view-button'><img alt='button_icon' className='button-icon' src={CheckedTestImage} ></img>Zakończ test</button>
            </div>
        </div>
    )
}

export default TestRun;