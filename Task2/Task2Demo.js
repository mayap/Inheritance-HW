
var people = [];

var person1 = new Person('Ivan', 32, true);
var person2 = new Person('Petyo', 16, true);

var student1 = new Student('Petya', 20, false, 5.50);
var student2 = new Student('Dimitur', 21, true, 4.8);

var employee1 = new Employee('Krasi', 15, true, 450);

var employee2 = new Employee('Elena', 30, false, 800);

people.push(person1, person2, student1,student2, employee1, employee2);

var lenArr = people.length;

for (var i = 0; i < lenArr; i++) {
    if (people[i] instanceof Person) {
        people[i].showPersonInfo();
        console.log(people[i].showPersonInfo());
    } else if (people[i] instanceof Student) {
        people[i].showStudentInfo();
        console.log(people[i].showStudentInfo());
    } else if (people[i] instanceof Employee) {
        people[i].showEmployeeInfo();
        console.log(people[i].showEmployeeInfo());
    }
}

for (i = 0; i < lenArr; i++) {
    if (people[i] instanceof Employee) {
        //people[i].calculateOvertime(2);
        console.log(people[i].calculateOvertime(2));
    }
}
