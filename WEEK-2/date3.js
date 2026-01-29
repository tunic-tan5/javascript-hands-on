/*Assignment 3: Age Calculator (Intermediate)
-------------------------------------------
Input:
    let dob = "2000-05-15";


Tasks:
        1. Calculate exact age in years*/

let dob = "2000-05-15";
let birthDate = new Date(dob);
let today = new Date();
let age = today.getFullYear() - birthDate.getFullYear();
console.log("Age in years:", age);