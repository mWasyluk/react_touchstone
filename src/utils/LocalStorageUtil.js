const LocalStorageUtil = {
    saveTestsArray(tests = []) {
        localStorage.setItem("tests", JSON.stringify(tests));
    },
    getTestsArray() {
        return JSON.parse(localStorage.getItem("tests"));
    },
    clearTests() {
        localStorage.removeItem("tests");
    }
}

export default LocalStorageUtil;