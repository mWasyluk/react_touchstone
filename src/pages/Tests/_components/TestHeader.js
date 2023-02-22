import React from 'react'

export default function TestHeader(props) {
    const {
        name,
        type,
        tags,
        passPercentage,
    } = props;

    const tagsString = tags.map((t, i) => {
        if (i < 1)
            return t;
        return ' ' + t;
    })

    return (
        <div>
            <h1 className="view-title">{name}</h1>
            <div className='view-subtitle'>
                <div className='subtitle-tiles'>
                    <div>{'Typ: ' + type}</div>
                    <div>{'Tagi: ' + tagsString}</div>
                    <div>{'Zalicza: ' + passPercentage + '%'}</div>
                </div>
            </div>
        </div>
    )
}
