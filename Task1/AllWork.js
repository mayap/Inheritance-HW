function AllWork() {
    tasks = new Array(Task);

    var freePlacesForTasks = 10;

    var currentUnassignedTask = 0;
}

AllWork.prototype.addTask = function (Task) {
    tasks.push(Task);
    console.log("New task added.");
};

AllWork.prototype.getNextTask = function () {
    console.log("New task is taken.");
    return tasks.shift();
};

AllWork.prototype.isAllWorkDone = function () {

};