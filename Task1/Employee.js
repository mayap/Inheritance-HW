function Employee(name, currentTask, hoursLeft, allWork) {
    AllWork.call(this);
    var _name = name;
    var _currentTask = currentTask;
    var _hoursLeft = hoursLeft;
    var _allWork = this.tasks;

    this.getName = function () {
        return _name;
    };

    this.getCurrentTask = function () {
        return _currentTask;
    };

    this.setCurrentTask = function (currentTask) {
        _currentTask = currentTask;
    };

    this.getHoursLeft = function () {
        return _hoursLeft;
    };

    this.setHoursLeft = function (hoursLeft) {
        _hoursLeft = hoursLeft;
    };

    this.getAllWork = function () {
        return _allWork;
    };

    this.setAllWork = function (allWork) {
        _allWork = allWork;
    };
}

Employee.prototype = Object.create(AllWork.prototype);

Employee.prototype.startWorkingDay = function () {
    this.setHoursLeft(8);
    console.log("New day beginning!");
};

Employee.prototype.work = function () {
    var hours = this.getHoursLeft();
    if (this.getCurrentTask().length == 0) {
        this.setCurrentTask(this.getNextTask());
        if (hours >= 1 && hours <= 8) {
            hours--;
            console.log("Employee is working on a task.");
        } else {
            this.setCurrentTask(this.getNextTask());
            console.log("Employee took a new task.");
        }
    }

    this.setHoursLeft(hours);
};