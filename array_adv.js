/*ASSIGNMENT 1:
-------------
You are building a shopping cart summary for an e-commerce website.

Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

Tasks:
    1. Use filter() to get only inStock products
    2. Use map() to create a new array with:  { name, totalPrice }
    3. Use reduce() to calculate grand total cart value
    4. Use find() to get details of "Mouse"
    5. Use findIndex() to find the position of "Keyboard"*/
const cart = [
    { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
    { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
    { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
    { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
let inStockProducts = cart.filter((product) => product.inStock);
console.log(inStockProducts);
let productTotals = cart.map((product) => {
    return { name: product.name, totalPrice: product.price * product.quantity };
});
console.log(productTotals);
let grandTotal = cart.reduce((acc, product) => acc + (product.price * product.quantity), 0);
console.log(grandTotal);
let mouseDetails = cart.find((product) => product.name === "Mouse");
console.log(mouseDetails);
let keyboardIndex = cart.findIndex((product) => product.name === "Keyboard");
console.log(keyboardIndex);

/*ASSIGNMENT 2:
-------------
Student Performance Dashboard

You are working on a college result analysis system.

Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

Tasks:
    1. filter() students who passed (marks ≥ 40)
    2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D

   3. reduce() to calculate average marks
   4. find() the student who scored 92
   5. findIndex() of student "Kiran"*/
const students = [
    { id: 1, name: "Ravi", marks: 78 },
    { id: 2, name: "Anjali", marks: 92 },   
    { id: 3, name: "Kiran", marks: 35 },
    { id: 4, name: "Sneha", marks: 88 },
    { id: 5, name: "Arjun", marks: 40 }
];
let passedStudents = students.filter((student) => student.marks >= 40);
console.log(passedStudents);
let gradedStudents = students.map((student) => {
    let grade = '';
    if (student.marks >= 90) grade = 'A';
    else if (student.marks >= 75) grade = 'B';
    else if (student.marks >= 60) grade = 'C';
    else grade = 'D';

    return { ...student, grade };
});
console.log(gradedStudents);
let averageMarks = students.reduce((acc, student) => acc + student.marks, 0) / students.length;
console.log(averageMarks);
let anjaliDetails = students.find((student) => student.marks === 92);
console.log(anjaliDetails);
let kiranIndex = students.findIndex((student) => student.name === "Kiran");
console.log(kiranIndex);



/*ASSIGNMENT 3:
-------------
Employee Payroll Processor

You are building a salary processing module in a company HR app.

Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

Tasks:
    1. filter() employees from IT department
    2. map() to add:
            netSalary = salary + 10% bonus

    3. reduce() to calculate total salary payout
    4. find() employee with salary 30000
    5. findIndex() of employee "Neha"*/
const employees = [
    { id: 201, name: "Amit", salary: 45000, department: "IT" },
    { id: 202, name: "Neha", salary: 60000, department: "HR" },
    { id: 203, name: "Rahul", salary: 75000, department: "IT" },
    { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
let itEmployees = employees.filter((employee) => employee.department === "IT");
console.log(itEmployees);
let employeesWithNetSalary = employees.map((employee) => {
    let netSalary = employee.salary + (employee.salary * 0.10);
    return { ...employee, netSalary };
});
console.log(employeesWithNetSalary);
let totalPayout = employees.reduce((acc, employee) => acc + employee.salary, 0);
console.log(totalPayout);
let employeeWith30000 = employees.find((employee) => employee.salary === 30000);
console.log(employeeWith30000);
let nehaIndex = employees.findIndex((employee) => employee.name === "Neha");
console.log(nehaIndex); 





/*ASSIGNMENT 4: 
------------
Movie Streaming Platform

You are working on a movie recommendation system.

Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


Tasks:
    1. filter() only "Sci-Fi" movies
    2. map() to return:
            "Inception (8.8)"

    3. reduce() to find average movie rating
    4. find() movie "Joker"
    5. findIndex() of "Avengers"*/
const movies = [
    { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
    { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
    { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
    { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];
let sciFiMovies = movies.filter((movie) => movie.genre === "Sci-Fi");
console.log(sciFiMovies);
let movieTitlesWithRatings = movies.map((movie) => `${movie.title} (${movie.rating})`);
console.log(movieTitlesWithRatings);
let averageRating = movies.reduce((acc, movie) => acc + movie.rating, 0) / movies.length;
console.log(averageRating);
let jokerMovie = movies.find((movie) => movie.title === "Joker");
console.log(jokerMovie);
let avengersIndex = movies.findIndex((movie) => movie.title === "Avengers");
console.log(avengersIndex);
/*
ASSIGNMENT 5: 
-------------
Bank Transaction Analyzer

You are building a bank statement summary.

Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


Tasks:
    1. filter() all credit transactions
    2. map() to extract only transaction amounts
    3. reduce() to calculate final account balance
    4. find() the first debit transaction
    5. findIndex() of transaction with amount 10000*/
const transactions = [
    { id: 1, type: "credit", amount: 5000 },
    { id: 2, type: "debit", amount: 2000 },
    { id: 3, type: "credit", amount: 10000 },
    { id: 4, type: "debit", amount: 3000 }
];
let creditTransactions = transactions.filter((transaction) => transaction.type === "credit");
console.log(creditTransactions);
let transactionAmounts = transactions.map((transaction) => transaction.amount);
console.log(transactionAmounts);
let finalBalance = transactions.reduce((acc, transaction) => {
    return transaction.type === "credit" ? acc + transaction.amount : acc - transaction.amount;
}, 0);
console.log(finalBalance);
let firstDebitTransaction = transactions.find((transaction) => transaction.type === "debit");
console.log(firstDebitTransaction);
let transactionWith10000Index = transactions.findIndex((transaction) => transaction.amount === 10000);
console.log(transactionWith10000Index); 
