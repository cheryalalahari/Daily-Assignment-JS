// Task-1
// Array Initialization
// Create an array of 10 random integers btwn 1 and 100.

let integers = [45, 34, 87, 54, 12, 32, 65, 80, 21, 9]

console.log(integers)

// Task-2
// Array Manipulation:

// Push operation

integers.push(78)
console.log(integers)

//Pop operation
integers.pop()
console.log(integers)

// Unshift operation

integers.unshift(56)
console.log(integers)

//Shift operation

integers.shift()
console.log(integers)

// Task-3
// Array Sorting:
// Ascending order
integers.sort((a,b) => a-b)
console.log(integers)

//Descending order
integers.sort((a,b) => b-a)
console.log(integers)


// Task-4
// Array Iteration:

integers.forEach(iter => console.log(iter))

// Task-5
// Array Transformation:

integers1 = [45, 78, 89, 34]

let integers2 = integers1.map(num => num**2)
console.log(integers2)

// Task-6
// Array Filtering:

integers3 = [3, 6, 8, 9, 2]

let integers4 = integers3.filter(filt => filt % 2 === 0)
console.log(integers4)

// Task-7
// Array Reduction:

integers5 = integers3.reduce((presentValue, currentValue) => presentValue + currentValue)
console.log(integers5)