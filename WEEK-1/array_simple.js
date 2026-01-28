/*Assignment 1: Daily Temperature Analyzer
----------------------------------------
Scenario : You are analyzing daily temperatures recorded by a weather app.

Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28 */
let temp = [32, 35, 28, 40, 38, 30, 42];
let result = temp.filter((element)=> element>35);
console.log(result);
let result1 = temp.map((element)=> (element * 9/5) + 32);
console.log(result1);
let result2 = temp.reduce((acc, ele)=> acc + ele, 0) / temp.length;
console.log(result2);       
let result3 = temp.find((ele)=> ele>40);
console.log(result3);   
let result4 = temp.findIndex((ele)=> ele==28);
console.log(result4);


/*Assignment 2: Online Course Name Processor
------------------------------------------
Scenario : You are preparing a course list for display on a website.

Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];


Tasks:
    1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

    4. find() the course "react"
    5. findIndex() of "node"*/
const courses = ["javascript", "react", "node", "mongodb", "express"];

let res = courses.filter((element)=>element.length>5);  
console.log(res);
let res1 = courses.map((element)=>element.toUpperCase());
console.log(res1);
let res2 = courses.reduce((acc, ele)=> acc + " | " + ele);
console.log(res2);
let res3 = courses.find((ele)=> ele=="react");
console.log(res3);
let res4 = courses.findIndex((ele)=> ele=="node");
console.log(res4);
 
/*Assignment 3: Student Marks List
--------------------------------
Scenario : You receive marks from an exam system.

Test data:
const marks = [78, 92, 35, 88, 40, 67];

Tasks:
    1. filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92*/

const marks = [78, 92, 35, 88, 40, 67];

let resm = marks.filter((element)=> element>=40);   
console.log(resm);
let resm1 = marks.map((element)=> element + 5);
console.log(resm1);
let resm2 = marks.reduce((max, ele)=> (ele > max ? ele : max), marks[0]);
console.log(resm2);
let resm3 = marks.find((ele)=> ele<40);
console.log(resm3);
let resm4 = marks.findIndex((ele)=> ele==92);
console.log(resm4);
