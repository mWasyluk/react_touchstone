import NavigationItem from './NavigationItem'
import React from 'react'

function Navigation(props) {
    const { options } = props;

    return (
        <ul className='navigation-list'>
            {options.map((opt, index) =>
                <li className='navigation-item' key={index}><NavigationItem {...opt}></NavigationItem></li>
            )}
        </ul>
    )
}

export default Navigation