
function Employee(name, age, isMale, daySalary) {
    Person.call(this, name, age, isMale);

    var _daySalary = daySalary;

    this.getDaySalary = function () {
       return _daySalary;
    };

    this.setDaySalary = function (daySalary) {
        _daySalary = daySalary;
    }
}

Employee.prototype.showEmployeeInfo = function () {
    var personInfo = Person.prototype.showPersonInfo.call(this);
    return personInfo + 'Day Salary: ' + this.getDaySalary();
};

Employee.prototype.calculateOvertime = function (hours) {
    var years = this.getAge();

    if (years >= 18) {
        return (this.getDaySalary() * 1.5) * hours;
    } else {
        return 0;
    }
};