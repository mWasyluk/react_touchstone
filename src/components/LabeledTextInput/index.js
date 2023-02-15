import React from 'react'
import styled from 'styled-components'

const LabeledTextInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    min-height: 80px;
    text-align: start;

    padding: 10px;

    color: #fff;
`;

const TextInput = styled.input`
    width: 100%;
    min-height: 2.4em;
    padding: 5px 8px;

    transition: background - color 0.15s ease -in -out;

    border: 2px solid #808080;
    border-radius: 10px;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.25);
`;

const TextInputLabel = styled.label`
    font-size: 1.2em;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

export default function LabeledTextInput({ labelContent = '', placeholder = '', value = '', onChange = () => { }, inputProps = {} }) {
    return (
        <LabeledTextInputContainer>
            <TextInputLabel className='text-label'>{labelContent}</TextInputLabel>
            <TextInput type='text' placeholder={placeholder} value={value || value === 0 ? value : ''} onChange={onChange} {...inputProps} />
        </LabeledTextInputContainer>
    )
}
