import { useEffect, useState } from "react";

function useFileToObject(fileToConvert) {
    const [file, setFile] = useState(fileToConvert);
    const [object, setObject] = useState();
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const fileReader = new FileReader();

        if (file) {
            fileReader.readAsText(file);
            fileReader.onload = () => setObject(JSON.parse(fileReader.result));
            fileReader.onerror = () => setErrorMessage(fileReader.error);
        }
    }, [file])


    return [
        object,
        errorMessage,
        setFile
    ]
}

export default useFileToObject;