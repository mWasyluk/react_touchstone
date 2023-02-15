import Popup from '.'
import React from 'react'

export default function ConfirmationPopup({
    content = 'Ta operacja jest nieodwracalna. Czy na pewno chcesz kontynuować?',
    onCancel = () => console.log('Cancel button clicked...'),
    onConfirm = () => console.log('Confirmation button clicked...'),
}) {

    const buttons = [
        {
            text: 'Przerwij',
            onClick: onCancel,
            style: { backgroundColor: 'rgb(255, 100, 100)' }
        },
        {
            text: 'Kontynuuj',
            onClick: onConfirm,
            style: {}
        }
    ]

    return (
        <Popup title={'Czy chcesz kontynuować?'} content={content} buttons={buttons} />
    )
}
