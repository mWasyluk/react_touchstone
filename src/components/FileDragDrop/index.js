import React, { useState } from "react";

import DragDropView from "./_components/DragDropView";
import ErrorPopup from "components/Popups/ErrorPopup";
import { FileUploader } from "react-drag-drop-files";

function FileDragDrop({ handleFileChange = () => { } }) {
    const [displayPopup, setDisplayPopup] = useState(false);

    const fileTypes = ["JSON"];
    const fileUploaderState = {
        hoverTitle: "Upuść tutaj",
        types: fileTypes,
        children: <DragDropView fileTypes={fileTypes} />,
        onTypeError: () => setDisplayPopup(true),
    }

    const handleChange = (file) => {
        handleFileChange(file);
    };

    return (
        <>
            <div>
                <FileUploader {...fileUploaderState} handleChange={handleChange} name="file" />
            </div>
            {displayPopup && <ErrorPopup content={`Pliki tego typu nie są obsługiwane. Wybierz plik z rozszerzeniem .${fileTypes}, aby zaktualizować listę testów.`} onConfirm={() => setDisplayPopup(false)} />}
        </>
    );
}

export default FileDragDrop;