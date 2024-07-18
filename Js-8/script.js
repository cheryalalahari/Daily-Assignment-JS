// -------- Task1 : Using Fetch API --------

function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data =>
                    console.log('response data:', data)
            )
}

fetchData();

// ----------Task2 : Handling Promises with Async and Await---------

async function fetchData1() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    try {
            if (!response.ok) {
                    throw new Error("HTTP Error")
            }
            const data = await response.json();
            console.log('response data:', data);
    }
    catch (error) {
            console.error('Error', error);
    }
}

fetchData1();

// ------Task3 : Fetch with Parameters-------

document.addEventListener('DOMContentLoaded', () => {
    async function fetchData2() {
            try {
                    const response = await fetch(
                            "https://jsonplaceholder.typicode.com/todos/"
                    );

                    if (!response.ok) {
                            throw new Error("HTTP error");
                    }
                    const data = await response.json();

                    populateData(data);
            } catch (error) {
                    console.error("Error", error);
            }
    }


    function populateData(data) {
            const tableBody = document.querySelector('#table-body tbody');
            data.forEach((post) => {
                    const row = document.createElement('tr');

                    const idCell = document.createElement('td');
                    idCell.textContent = post.id;
                    row.appendChild(idCell);

                    const titleCell = document.createElement('td');
                    titleCell.textContent = post.title;
                    row.appendChild(titleCell);

                    const completedCell = document.createElement('td');
                    completedCell.textContent = post.completed;
                    row.appendChild(completedCell);

                    tableBody.appendChild(row);

            });



    }

    fetchData2()
})


//  ----------Task4 : Error Handling in Asynchronous Code---------
let fetchData3 = async () => {
    try {
            const response = await fetch("https://jsonplaceholder.typicode.com/,");

            if (!response.ok) {
                    throw new Error("HTTP error");
            }

            const data = await response.json();

            console.log("response data:", data);
    } catch (error) {
            console.error("error in fetching data:", error);
    }
}

fetchData3();

//  ---------Task 5 : Combining Fetch with Async/Await and Error Handling---------

const fetchPosts = async () => {
    try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) {
                    throw new Error('HTTP Error');
            }
            let data = response.json();
            console.log(data);
    } catch (error) {
            console.error("Error", error)
    }
}

fetchPosts();


// Reflection Questions:

// 1. What did you learn about the Fetch API and handling asynchronous operations in JavaScript?
// A: -> The Fetch API allows you to access APIs and perform a network request using standard request methods
// ->The Fetch API returns a promise,you can use the function call with .then() and .catch() methods, or use the async/await syntax.
// ->With asynchronous programming, JavaScript programs can start long-running tasks, and continue running other tasks in parallel. it can handle asynchronous operations using Promises, async/await, and callback functions.

// 2.How does using async and await simplify working with Promises?
// A: ->Async and Await in JavaScript are powerful keywords used to handle asynchronous operations with promises.
// ->Async functions implicitly return promises, while Await pauses the execution until the promise is resolved. This simplifies asynchronous code and enhances readability by making it appear synchronous.

// 3.What are the advantages of incorporating error handling in asynchronous functions?
// A: ->Incorpative Error Handling in Asynchronous Function is essential for robust JavaScript applications.It preventing crashes, maintaining application stability and enhances debugging.
