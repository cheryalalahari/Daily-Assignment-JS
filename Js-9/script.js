// ------Task1: Copying Objects and Arrays------

// 1. Shallow Copy
let Obj = {
    name : "Vikram",
    age : 25,
    Details : {
        Role : "FrontEnd Developer",
        Salary : 50000,
    }
};


// Shallowcopy of object
let Obj2 = Object.assign({}, Obj);

// Using spread operator
let Obj3 ={...Obj};

Obj2.Details.Role = "FullStack Developer";
Obj2.Details.Salary = 70000;

console.log(Obj);
console.log(Obj2);
console.log(Obj3);

// 2.Deep Copy

let Student = {
    name : "Shruthi",
    age : 20,
    address : {
        city : "Chennai",
        state : "Tamilnadu",
    }
}

let newStudent = JSON.parse(JSON.stringify(Student));

newStudent.address.city = "Banglore";
newStudent.address.state = "Karnataka";

console.log(Student);
console.log(newStudent);

// ------Task2: Using Spread Operator------

// 1.Spread in Arrays
let arr1 = [2, 4, 6, 8, 10];
let arr2 = [1, 3, 5, 7, 9];

let combinedArray = [...arr1, ...arr2,];

console.log(combinedArray);

// 2.Spread in Objects
let obj1 = {
    name : "John",
    age : 25,
};
let obj2 = {
    id : 23456,
    city : "Hyderabad",
};

let combinedObj = {...obj1, ...obj2};

console.log(combinedObj);

// ------Task3: Using Rest Operator------

// 1. Rest in Functions
 let Sum = (...Arguments) => {
      return Arguments.reduce((acc, cur) => acc + cur, 0);
 };

 console.log(Sum(10, 20, 30, 40, 50));
 console.log(Sum(3, 4.6, 9.7, 20.68, 98.7));
 console.log(Sum(4, -39, 22, -3, 6));

//  2. Rest in Array Destructuring
 let Array = ['Tamato', 'Potato', 'Carrot', 'Onion', 'Cucumber'];
 let [first, second, ...rest] = Array;
 console.log(first);
 console.log(second);
 console.log(rest);






// Reflection Questions

// 1. What did you learn about shallow and deep copying through this task? 
// Ans:
// -> ShallowCopying: A shallow copy is a copy that creates a new object with the same properties as the original object but The values of their properties are equal.It is done by using Object.assign() method.

// -> Deep Copying: A deep copy is a copy that creates a new object with the same properties as the original object but The values of their properties are not equal. It is done using JSON.parse() and JSON.stringify() methods.

// 2.How do the spread and rest operators simplify working with arrays and objects in JavaScript?
// Ans: spread and rest operators are used to simplify working with arrays and objects in JavaScript.By allowing you to use the spread operator, you can easily expand an array or object into multiple arguments. By using the rest operator, you can extract multiple values from an array or object.

// 3.What are the main differences between shallow and deep copies?
// Ans: The main difference between shallow and deep copies :
// ->Shallow Copy stores the references of objects to the original memory address.  but Deep Copy stores copies of the object’s values in the new memory address.
// -> Shallow Copy reflects changes made to the new/copied object in the original object.but deepcopy doesn't reflect changes made to the new/copied object in the original object.

// 4. In what scenarios would you prefer using the rest operator in functions?
// Ans: The rest operator is used to pass multiple arguments to a function.The rest operator simplify array manipulation and function handling.