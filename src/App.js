import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Dashboard from './pages/Dashboard';
import Header from 'components/Header';
import LocalStorageUtil from './utils/LocalStorageUtil';
import NavigationUtil from 'utils/NavigationUtil';
import NotFound from 'pages/NotFound';
import TestCreate from 'pages/Tests/TestCreate';
import TestEdit from 'pages/Tests/TestEdit';
import TestRun from 'pages/Tests/TestRun';

export const appTitle = "Touchstone";
document.title = appTitle;

function App() {
    const localTests = LocalStorageUtil.getTestsArray();
    const [tests, setTests] = useState(localTests ? localTests : [])

    const handleTestsChange = (tests = []) => {
        setTests(tests);
    }

    const getTestById = (id) => {
        const matchingTest = tests.filter(t => t.id === id)[0];

        if (!matchingTest) {
            console.error("Test with the given ID does not exist. ID:", id)
            return;
        }

        return matchingTest;
    }

    const updateTestById = updatedTest => {
        const matchingTest = tests.filter(t => t.id === updatedTest.id)[0];

        if (!matchingTest) {
            console.error("Test with the given ID does not exist. ID:", updatedTest.id)
            return;
        }

        const allTests = tests;
        const matchingTestIndex = allTests.indexOf(matchingTest);
        allTests[matchingTestIndex] = updatedTest;

        setTests(allTests);
    }

    const addTest = test => {
        setTests(prev => [test, ...prev])
    }

    const removeTestById = id => {
        const result = tests.filter(t => t.id !== id);

        setTests(result);
    }

    useEffect(() => {
        LocalStorageUtil.saveTestsArray(tests)
    }, [tests])

    return (
        <div className="App">
            <Header></Header>
            <center className="center">
                <Routes>
                    <Route path={NavigationUtil.pathMatchers.home} element={
                        <h1 style={{ color: 'white' }}>Home screen</h1>
                    } />
                    <Route path={NavigationUtil.pathMatchers.dashboard.home} element={
                        <Dashboard testsArray={tests} setTestsArray={handleTestsChange} removeTestById={removeTestById} />
                    } />
                    <Route path={NavigationUtil.pathMatchers.tests.new} element={
                        <TestCreate createTest={addTest} />
                    } />
                    <Route path={NavigationUtil.pathMatchers.tests.edit} element={
                        <TestEdit getTestById={getTestById} updateTestById={updateTestById} />
                    } />
                    <Route path={NavigationUtil.pathMatchers.tests.run} element={
                        <TestRun getTestById={getTestById} />
                    } />
                    <Route path="*" element={
                        <NotFound />
                    } />
                </Routes >
            </center>
        </div>
    );
}

export default App;
