import Popup from "."

export default function ErrorPopup({
    content = 'Ta operacja nie jest aktualnie możliwa.',
    onConfirm = () => console.log('Ok button clicked...')
}) {

    const buttons = [
        {
            text: 'Ok',
            onClick: onConfirm,
            style: { backgroundColor: 'rgb(255, 100, 100)' }
        }
    ]

    return (
        <Popup title={'Coś poszło nie tak...'} content={content} buttons={buttons} />
    )
}