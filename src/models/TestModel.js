import TaskModel from "./TaskModel";
import UuidUtil from 'utils/UuidUtil';

const defaultValues = {
    name: "Nowy test",
    type: "Teoretyczny",
    tags: ["Domyślny"],
    passPercentage: 90,
}

class TestModel {
    constructor(
        id = UuidUtil.generateUuid(),
        name = defaultValues.name,
        type = defaultValues.type,
        tags = defaultValues.tags,
        passPercentage = defaultValues.passPercentage,
        tasks = []
    ) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.tags = tags;
        this.passPercentage = passPercentage;
        this.tasks = tasks;
    }

    appendTask(task = new TaskModel()) {
        this.tasks.push(task);
    }

    setName(name = '') {
        this.name = name.trim();
    }

    setType(type = '') {
        this.type = type.trim();
    }

    setPassPercentage(passPercentage = '') {
        this.passPercentage = passPercentage;
    }

    setTags(tags = []) {
        this.tags = tags;
    }
}

export default TestModel;