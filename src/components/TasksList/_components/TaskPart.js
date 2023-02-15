import React, { useEffect, useRef, useState } from 'react'

import styled from 'styled-components';

const TaskPartContainer = styled.div`
    margin: 5px 3px;
    font-size: 1em;
`;

const TextareaContainer = styled.div`
    display: flex; 
    column-gap: 15px;

    padding: 5px 0px;
`;

const Textarea = styled.textarea`
    width: 100%;
    padding: 5px;
    border-radius: 5px;
    overflow-x: none;
    resize: none;
`;

const OptionsContainer = styled.div`
    width: max-content;

    display: flex;
    flex-direction: row;
    column-gap: 5px;

    align-items: center;
`;

export default function TaskPart({ header = 'header_placeholder', defaultValue = '', valueCallback = () => { }, textareaProps = {}, textareaOptions = [] }) {
    const [value, setValue] = useState(defaultValue);
    const textareaRef = useRef();

    useEffect(() => {
        textareaRef.current.style.height = "0px";
        const scrollHeight = textareaRef.current.scrollHeight;
        const textAreaHeight = textareaRef.current.clientHeight;
        let finalHeight = scrollHeight;
        if (scrollHeight > textAreaHeight)
            finalHeight += 5;
        textareaRef.current.style.height = finalHeight + "px";

        valueCallback(value);
    }, [value, valueCallback]);

    return (
        <TaskPartContainer>
            {header}
            <TextareaContainer>
                <Textarea ref={textareaRef} value={value} onChange={e => { setValue(e.target.value) }} {...textareaProps}></Textarea>
                <OptionsContainer>{textareaOptions}</OptionsContainer>
            </TextareaContainer>
        </TaskPartContainer>
    )
}