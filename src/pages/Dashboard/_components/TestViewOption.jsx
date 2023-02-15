import React from 'react'
import styled from 'styled-components'

const OptionButton = styled.div`
    width: 30px;
    height: 30px;
    margin: 10px;

    background-color: #ccc;
    cursor: pointer;

    border-radius: 10px;
    border: 3px solid #888;

    transition: 0.1s ease-in-out;

    &:hover {
        background-color: #eee;
        transform: scale(1.3);
        border: 1px solid #555;
    }
`;

export default function TestViewOption(props) {
    const {
        content,
        onClick = () => { },
    } = props;
    return (
        <OptionButton onClick={onClick} {...props}>
            {content}
        </OptionButton>
    )
}
