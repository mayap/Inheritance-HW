function AllWork() {
    this.tasks = [];

    var freePlacesForTasks = 10;

    var currentUnassignedTask = 0;
}

AllWork.prototype.addTask = function (task) {
    this.tasks.push(task);
    console.log("New task added.");
};

AllWork.prototype.getNextTask = function () {
    console.log("New task is taken.");
    return tasks.shift();
};

AllWork.prototype.isAllWorkDone = function () {

};