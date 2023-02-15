import './_styles/style.css'

export default function Popup({
    title = 'title_placeholder',
    content = 'content_placeholder',
    buttons = [
        {
            text: 'btn_text_placeholder',
            style: { backgroundColor: 'rgb(255, 100, 100)' },
            onClick: () => { console.log("Clicked popup button...") }
        },
        {
            text: 'btn_text_placeholder',
            style: {},
            onClick: () => { console.log("Clicked popup button...") }
        }
    ]
}) {

    return (
        <div className='popup-background'>
            <div className='popup-container'>
                <div className='popup-title'>
                    <h2>{title}</h2>
                </div>
                <div className='popup-content'>
                    <p>{content}</p>
                </div>
                <div className='popup-footer'>
                    {buttons.map((btn, index) => <button key={index} style={btn.style} onClick={btn.onClick}>{btn.text}</button>)}
                </div>
            </div>
        </div>
    )
}
