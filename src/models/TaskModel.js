const { default: UuidUtil } = require("utils/UuidUtil");

class TaskModel {
    constructor(
        id = UuidUtil.generateUuid(),
        question = '',
        answer = '',
        points = 1,
    ) {
        this.id = id;
        this.question = question;
        this.answer = answer;
        this.points = points;
    }
}

export default TaskModel;
