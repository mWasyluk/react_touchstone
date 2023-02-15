import { useEffect, useState } from 'react'

export default function usePercentage(minPercentage = 0, maxPercentage = 100) {
    const [string, setString] = useState(undefined);
    const [percentage, setPercentage] = useState(undefined);

    useEffect(() => {
        if (!string && string !== '') {
            console.info('String value is usetable.', string)
            return;
        }
        const value = string.trim();
        const intValue = Number(value);

        if (value && isNaN(intValue)) {
            console.warn("The provided value cannot be parsed into an integer value: '" + value + "'.")
            return;
        }
        if (value !== '' && (intValue < minPercentage || intValue > maxPercentage)) {
            console.warn("The pass percentage value cannot be outside the range <0,100>: '" + intValue + "'.")
            return;
        }
        if (value === '') {
            setPercentage(undefined);
            return;
        }

        setPercentage(intValue);
    }, [string, minPercentage, maxPercentage]);

    return [
        percentage,
        setString
    ]
}
