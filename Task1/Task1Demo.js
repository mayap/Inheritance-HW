t1 = new Task("Task 1", 15);
t2 = new Task("Task 2", 4);
t3 = new Task("Task 3", 6);
t4 = new Task("Task 4", 1);
t5 = new Task("Task 5", 32);
t6 = new Task("Task 6", 40);
t7 = new Task("Task 7", 18);
t8 = new Task("Task 8", 2);
t9 = new Task("Task 9", 3);
t10 = new Task("Task 10", 2);

var allWork = [];

allWork.addTask(t1);
allWork.addTask(t2);


e1 = new Employee("Ivan");
e2 = new Employee("Niki");
e3 = new Employee("Tina");

while (allWork.length != 0) {
    e1.startWorkingDay();
}
