import './_styles/style.css'

import ClearTestsIcon from 'assets/remove-tests.png'
import DataUtil from 'utils/DataUtil';
import ExportTestsIcon from 'assets/export-file.png'
import FileDragDrop from 'components/FileDragDrop';
import LocalStorageUtil from 'utils/LocalStorageUtil';
import NavigationUtil from 'utils/NavigationUtil';
import NewTestIcon from 'assets/add-file.png'
import TestView from './_components/TestView';
import { useEffect } from 'react';
import useFileToTestsArray from 'pages/Dashboard/_hooks/useFileToObject';
import { useNavigate } from 'react-router-dom';

function Dashboard(props) {
    const {
        testsArray = [],
        setTestsArray = () => { },
        removeTestById = () => { },
    } = props

    const [testsModels, setFile] = useFileToTestsArray();
    const navigateTo = useNavigate();

    const setFileWithTests = (file) => {
        setFile(file)
    }

    const clearPersistedTests = () => {
        LocalStorageUtil.clearTests();
        setTestsArray([]);
    }

    const exportPersistedTests = () => {
        DataUtil.downloadTestsAsJson(testsArray, 'TouchStone.tests.json');
    }

    useEffect(() => {
        if (!testsModels) return;
        setTestsArray(testsModels);
    }, [testsModels, setTestsArray])

    return (
        <div className="full-size-view-container tests-view-container">
            <div>
                <p className="view-title">Twoje testy</p>
                <p className='view-subtitle'>Sprawdź wyniki ostatnich testów lub spróbuj swoich sił w kolejnym podejściu. </p>
            </div>

            <FileDragDrop handleFileChange={setFileWithTests}></FileDragDrop>

            <div className="full-size-view-main-content">
                <div className='tests-view'>
                    {testsArray.map(test => (
                        <div key={test.id} className="col test-frame">
                            <TestView test={test} removeTest={() => removeTestById(test.id)}></TestView>
                        </div>
                    ))}
                </div>
            </div>

            <div className='view-bottom-menu'>
                <button onClick={exportPersistedTests} className='view-support-button'><img alt='export_tests_icon' className='support-button-icon' src={ExportTestsIcon}></img>Wyeksportuj</button>
                <button onClick={clearPersistedTests} className='view-support-button'><img alt='clear_tests_icon' className='support-button-icon' src={ClearTestsIcon}></img>Wyczyść</button>
                <button onClick={() => navigateTo(NavigationUtil.links.ofTests.new)} className='view-button'><img alt='button_icon' className='button-icon' src={NewTestIcon}></img>Nowy test</button>
            </div>
        </div>
    )
}

export default Dashboard;