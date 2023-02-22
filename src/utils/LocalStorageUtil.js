import TestModel from "models/TestModel";

const LocalStorageUtil = {
    saveTestsArray(tests = []) {
        localStorage.setItem("tests", JSON.stringify(tests));
    },
    getTestsArray() {
        const obj = JSON.parse(localStorage.getItem("tests"));
        if (!(obj instanceof Array))
            return [];
        return obj;
    },
    getTestsAsModelsArray() {
        const obj = JSON.parse(localStorage.getItem("tests"));
        if (!(obj instanceof Array))
            return [];
        const models = obj.map(t => new TestModel(t));
        return models;
    },
    clearTests() {
        localStorage.removeItem("tests");
    }
}

export default LocalStorageUtil;