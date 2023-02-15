import { useEffect, useState } from 'react'

export default function useTags(stringValue = '', delimiter = ',') {
    const [string, setString] = useState(stringValue);
    const [tags, setTags] = useState([])

    useEffect(() => {
        setTags(string.trim().split(delimiter).map(t => t.trim()))
    }, [string, delimiter])

    return [
        string,
        setString,
        tags,
    ]

}
