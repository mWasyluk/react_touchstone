const DataUtil = {
    downloadTestsAsJson(content, filename) {
        download(content, filename, 'application/json');
    }
}

function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([JSON.stringify(content)], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

export default DataUtil