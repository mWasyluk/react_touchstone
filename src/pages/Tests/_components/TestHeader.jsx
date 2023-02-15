import React from 'react'

export default function TestHeader(props) {
    const {
        name,
        type,
        tags,
        passPercentage,
    } = props;

    return (
        <div>
            <h1 className="view-title">{name}</h1>
            <div className='view-subtitle'>
                <div className='subtitle-tiles'>
                    <div>{'Typ: ' + type}</div>
                    <div>{'Tagi: ' + tags}</div>
                    <div>{'Zalicza: ' + passPercentage + '%'}</div>
                </div>
            </div>
        </div>
    )
}
