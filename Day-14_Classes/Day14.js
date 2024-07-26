/**
 * Activity 1: Class Definition
 */

// Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.
console.log("=====Task 1=====");

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greetings() {
        return `Hi , I am ${this.name} and My age is ${this.age}.`;
    }
}
const person = new Person("Sumit Gorai", 22);
console.log(person.greetings());


// Task 2: Add a method to the Person class that updates the age property and logs the updated age.
console.log("=====Task 2=====");

class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greetings() {
        return `Hi , I am ${this.name} and Now, My age is ${this.age}.`;
    }
    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age : ${this.age}`)
    }
}
const person2 = new Person2("Sumit Gorai", 24);
person2.updateAge(20);
console.log(person2.greetings());
/**
 * Activity 2: Class Inheritance
 */

// Task 3: Define a class Student that extends the Person class. Add a property studentID and a method to return the student ID. Create an instance of the Student class and log the student ID.
console.log("=====Task 3=====");

class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }
    getStudentId() {
        return this.studentId;
    }
}
const student = new Student("Amit", 23, "UG100001");
console.log(`Student Id : ${student.getStudentId()}`)

// Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.
console.log("=====Task 4=====");

class Student2 extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }
    greetings() {
        return `Hi , My name is ${this.name} and My age is ${this.age} and My Student ID is ${this.studentId}.`;
    }
}
const student2 = new Student2("Amit", 23, "UG100001");
console.log(student2.greetings());

/**
 * Activity 3: Static Methods and Properties
 */

// Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
console.log("=====Task 5=====")

class Person3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static greetings() {
        return `Hello This is a generic greetings message.`;
    }
}
console.log(Person3.greetings());



// Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
console.log("=====Task 6=====")

class Student6 extends Person {
    static studentCount = 0;

    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
        Student6.studentCount++;
    }
    static getTotalStudent() {
        return Student6.studentCount;
    }
}
const student3 = new Student6("Sumit", 20, "UG1001")
const student4 = new Student6("Amit", 21, "UG1002")

console.log(`Total no. of students : ${Student6.getTotalStudent()}`)

/**
 * Activity 4: Getters and Setters
 */

// Task 7: Add a getter method to the Person class to return the full name (assume a firstName and LastName property). Create an instance and log the full name using the getter.
console.log("=====Task 7=====")

class Person4 {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person4 = new Person4("Sumit", "Gorai", 20)
console.log(`Full Name : ${person4.fullName}`)

// Task 8: Add a setter method to the Person class to update the name properties (firstName and LastName). Update the name using the setter and log the updated full name.
console.log("=====Task 8=====")

class Person5 {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(name) {
        const [firstName, lastName] = name.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person5 = new Person5("Sumit", "Gorai", 20)
person5.fullName = "Amit Gorai";
console.log(`Updated Full Name : ${person5.fullName}`)

/**
 * Activity 5: Private Fields (Optional)
 */

// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
console.log("=====Task 9=====")

class Account {
    #balence;

    constructor(initialBalence) {
        this.#balence = initialBalence;
    }
    deposit(amount) {
        if (amount > 0) {
            this.#balence += amount;
            console.log(`You deposited Rs.${amount} and Your New balence : ${this.#balence} `)
        }else{
            console.log("Please enter amount to deposit");
        }
    }

    withdraw(amount){
        if(amount>0 && amount <=this.#balence){
            this.#balence -= amount;
            console.log(`You withdraw : Rs.${amount} and Your new balence is ${this.#balence}`)
        }else{
            console.log("Invalid Withdrawal amout.")
        }
    }

    getBalence(){
        return this.#balence;
    }
}
const myAccount = new Account(500);
console.log(`Current balence : ${myAccount.getBalence()}`)

myAccount.deposit(100);
myAccount.withdraw(200);
myAccount.withdraw(50);

console.log(`Current balence : ${myAccount.getBalence()}`)

// Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.
console.log("=====Task 10=====")
class Account1 {
    #balence;

    constructor(initialBalence) {
        this.#balence = initialBalence;
    }
    deposit(amount) {
        if (amount > 0) {
            this.#balence += amount;
            console.log(`You deposited Rs.${amount} and Your New balence : ${this.#balence} `)
        }else{
            console.log("Please enter amount to deposit");
        }
    }

    withdraw(amount){
        if(amount>0 && amount <=this.#balence){
            this.#balence -= amount;
            console.log(`You withdraw : Rs.${amount} and Your new balence is ${this.#balence}`)
        }else{
            console.log("Invalid Withdrawal amout.")
        }
    }

    getBalence(){
        return this.#balence;
    }
}
const myAccount1 = new Account1(500);
console.log(`Initial balence : ${myAccount1.getBalence()}`)

myAccount1.deposit(100);
console.log(`Balence after deposit: ${myAccount1.getBalence()}`)

myAccount1.withdraw(200);
console.log(`Balence after withdrawal : ${myAccount1.getBalence()}`)

myAccount1.withdraw(5000);
console.log(`Balence after withdrawal : ${myAccount1.getBalence()}`)

console.log(`Balence after failed withdrawal : ${myAccount1.getBalence()}`)

console.log(`FInal Balence : ${myAccount1.getBalence()}`)