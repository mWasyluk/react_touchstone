import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import Dashboard from './pages/Dashboard';
import Header from 'components/Header';
import LocalStorageUtil from './utils/LocalStorageUtil';
import NavigationUtil from 'utils/NavigationUtil';
import NotFound from 'pages/NotFound';
import TestCreate from 'pages/Tests/TestCreate';
import TestEdit from 'pages/Tests/TestEdit';
import TestModel from 'models/TestModel';
import TestRun from 'pages/Tests/TestRun';

export const appTitle = "Touchstone";
document.title = appTitle;

function App() {
    const isMounted = useRef(false);
    const [tests, setTests] = useState(LocalStorageUtil.getTestsAsModelsArray());

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

    const updateTest = updatedTest => {
        const indexToUpdate = tests.indexOf(tests.filter(t => t.id === updatedTest.id)[0]);

        if (indexToUpdate < 0) {
            console.error("Test with the given ID does not exist. ID:", updatedTest.id);
            return;
        }

        setTests(prev => {
            prev[indexToUpdate] = new TestModel({ ...updatedTest });
            return [...prev];
        });
    }

    const addTest = test => {
        setTests(prev => [new TestModel(test), ...prev]);
    }

    const removeTestById = id => {
        const result = tests.filter(t => t.id !== id);

        setTests(result);
    }

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
            return;
        }

        LocalStorageUtil.saveTestsArray(tests);
    }, [tests]);

    return (
        <div className="App">
            <Header></Header>
            <center className="center">
                <Routes>
                    <Route path={NavigationUtil.pathMatchers.home} element={
                        <h1 style={{ color: 'white' }}>Home screen</h1>
                    } />
                    <Route path={NavigationUtil.pathMatchers.ofDashboard.home} element={
                        <Dashboard testsArray={tests} setTestsArray={handleTestsChange} removeTestById={removeTestById} />
                    } />
                    <Route path={NavigationUtil.pathMatchers.ofTests.new} element={
                        <TestCreate createTest={addTest} />
                    } />
                    <Route path={NavigationUtil.pathMatchers.ofTests.edit} element={
                        <TestEdit getTestById={getTestById} updateTestById={updateTest} />
                    } />
                    <Route path={NavigationUtil.pathMatchers.ofTests.run} element={
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
