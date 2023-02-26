import ConfirmationPopup from 'components/Popups/ConfirmationPopup';
import { GrEdit } from 'react-icons/gr'
import { IoPlay } from 'react-icons/io5'
import NavigationUtil from 'utils/NavigationUtil';
import { TbTrashX } from 'react-icons/tb'
import TestViewOption from './TestViewOption';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const TestViewContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 100%;
    width: 100%;
    padding: 10px;

    background-color: var(--test-view-bg-color);

    border: 3px solid #222;
    border-radius: 10px;
    box-shadow: 2px 2px 5px black;

    transition: 0.1s ease-in-out;

    &:hover {
        z-index: 99;
        background-color: rgb(255, 255, 255);
        transform: scale(1.05);
    }
`;

const TestTitle = styled.span`
    font-size: 1.1em;
    font-weight: 500;
    color: var(--test-name-color);
`;

const TestDetails = styled.div`
    text-align: start;
`;

const TestOptions = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const defaultProps = {
    test: {
        title: "Sample title"
    },
}

function TestView(props = defaultProps) {
    const {
        test,
        removeTest = () => { }
    } = props;

    const [displayPopup, setDisplayPopup] = useState(false);

    const navigateTo = useNavigate();

    return (
        <>
            <TestViewContainer>
                <TestTitle>{test.name}</TestTitle>

                <TestDetails>
                    <p>Próby: </p>
                    <p>Zaliczenia: </p>
                    <p>Średnia punktów: </p>
                </TestDetails>

                <TestOptions>
                    <TestViewOption content={<TbTrashX />} onClick={() => setDisplayPopup(true)} style={{ color: '#cc3344', borderColor: '#cc3344' }}></TestViewOption>
                    <TestViewOption content={<GrEdit />} onClick={() => navigateTo(NavigationUtil.links.ofTests.editById(test.id))}></TestViewOption>
                    <TestViewOption content={<IoPlay />} onClick={() => navigateTo(NavigationUtil.links.ofTests.runById(test.id))}></TestViewOption>
                </TestOptions>
            </TestViewContainer >

            {displayPopup && <ConfirmationPopup
                content='Operacja usunięcia testu jest nieodwracalna. Czy na pewno chcesz kontynuować?'
                onCancel={() => setDisplayPopup(false)}
                onConfirm={() => removeTest()}
            />}
        </>
    )
}

export default TestView;