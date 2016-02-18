
function Person(name, age, isMale) {
    var _name = name;
    var _age = age;
    var _isMale = isMale;

    var _this = this;

    this.getNamePerson = function () {
        return _name;
    };

    this.setNamePerson = function (name) {
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
    return this.getNamePerson() + ' is ' + this.getAge() + ' years old and is a ' + (this.getIsMale() ? 'male. ' : 'female. ');
};