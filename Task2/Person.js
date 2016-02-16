
function Person(name, age, isMale) {
    var _name = name;
    var _age = age;
    var _isMale = isMale;

    var _this = this;

    this.getName = function () {
        return _name;
    };

    this.setName = function (name) {
        _name = name;
    };

    this.getAge = function () {
        return _age;
    };

    this.setAge = function (age) {
        _age = age;
    };

    this.getIsMale = function () {
        return _isMale;
    };

    this.setIsMale = function (isMale) {
        _isMale = isMale;
    };
}

Person.prototype.showPersonInfo = function() {
    return this.getName() + ' is ' + this.getAge() + ' years old and is a ' + (this.getIsMale() ? 'male. ' : 'female. ');
};