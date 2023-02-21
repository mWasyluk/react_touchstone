import TaskModel from "./TaskModel";
import UuidUtil from 'utils/UuidUtil';

const defaultValues = {
    name: "Nowy test",
    type: "Teoretyczny",
    tags: ["Domyślny"],
    passPercentage: 90,
}

class TestModel {
    constructor({
        id,
        name,
        type,
        tags,
        passPercentage,
        tasks,
    } = {
            id: UuidUtil.generateUuid(),
            name: defaultValues.name,
            type: defaultValues.type,
            tags: defaultValues.tags,
            passPercentage: defaultValues.passPercentage,
            tasks: []
        }) {
        this.id = id ? id : UuidUtil.generateUuid();
        this.name = name;
        this.type = type;
        this.tags = tags;
        this.passPercentage = passPercentage;
        this.tasks = tasks.map(t => new TaskModel(t));
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