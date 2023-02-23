import { useEffect, useState } from "react";

import TestModel from "models/TestModel";

function useFileToTestsArray(fileToConvert) {
    const [file, setFile] = useState(fileToConvert);
    const [testsModels, setTestsModels] = useState();

    useEffect(() => {
        const fileReader = new FileReader();

        if (file) {
            fileReader.readAsText(file);
            fileReader.onload = () => {
                const array = JSON.parse(fileReader.result);
                setTestsModels(array.map(t => new TestModel(t)));
            };
            fileReader.onerror = () => {
                console.error(fileReader.error)
            };
        }
    }, [file])


    return [
        testsModels,
        setFile
    ]
}

export default useFileToTestsArray;