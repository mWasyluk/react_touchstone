const { default: UuidUtil } = require("utils/UuidUtil");

class TaskModel {
    constructor({
        id,
        question,
        answer,
        points,
    } = {
            id: UuidUtil.generateUuid(),
            question: '',
            answer: '',
            points: 1,
        }) {
        this.id = id ? id : UuidUtil.generateUuid();
        this.question = question;
        this.answer = answer;
        this.points = points;
    }
}

export default TaskModel;
