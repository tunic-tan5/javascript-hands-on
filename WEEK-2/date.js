//assignment 1
//date creation and extraction 
//1.create a date object for current date and time 
//2.extract and display: year,month(human readable),date,day of week,hours, mins, seconds
//3.display the date in dd-mm-yyyy hh:mm:ss format
let currentDate = new Date();
console.log("Current Date and Time:", currentDate.toString());
console.log("Year:", currentDate.getFullYear());
console.log("Month:", currentDate.getMonth());
console.log("Date:", currentDate.getDate());
console.log("Day of Week:", currentDate.getDay());
console.log("Hours:", currentDate.getHours());
console.log("Minutes:", currentDate.getMinutes());
console.log("Seconds:", currentDate.getSeconds());

let dd = String(currentDate.getDate());
let mm = String(currentDate.getMonth() + 1);
let yyyy = currentDate.getFullYear();
let hh = String(currentDate.getHours()) ;
let min = String(currentDate.getMinutes()) ;
let ss = String(currentDate.getSeconds()) ; 
let formattedDate = dd + '-' + mm + '-' + yyyy + ' ' + hh + ':' + min + ':' + ss;
console.log("Formatted Date:", formattedDate);
