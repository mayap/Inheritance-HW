function AllWork() {
    Task.call(this);
    this.tasks = [];

    var freePlacesForTasks = 10;

    var currentUnassignedTask = 0;
}

AllWork.prototype = Object.create(Task.prototype);

AllWork.prototype.addTask = function (task) {
    task = new Task(this.getName(), this.getWorkingHours());
    this.tasks.push(task);
    console.log(task.getName() + " added.");
};

AllWork.prototype.getNextTask = function () {
    console.log("New task is taken.");
    return this.tasks.shift();
};

AllWork.prototype.isAllWorkDone = function () {
    var len = this.tasks.length;
    for (var i = 0; i < len; i++) {
        if (this.tasks[i].getWorkingHours() != 0) {
            return false;
        }
    }
    return true;
};