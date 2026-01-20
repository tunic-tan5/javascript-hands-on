/*Assignment 1: User Profile Manager
----------------------------------
Scenario : You are managing a logged-in user’s profile in a web application.

Test data:
const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};

Tasks:
    1. Read and print the user’s name and email
    2. Add a new property lastLogin: "2026-01-01"
    3. Update role from "student" to "admin"
    4. Delete the isActive property
    5. Use Object.keys() to list all remaining fields*/
const user = {
    id: 101,
    name: "Ravi",
    email: "ravi@gmail.com",
    role: "student",
    isActive: true
};  
console.log("Name:", user.name);
console.log("Email:", user.email);
user.lastLogin = "2026-01-01";
user.role = "admin";
delete user.isActive;
let userKeys = Object.keys(user);
console.log("Remaining fields:", userKeys); 


/*Assignment 2: Exam Result Summary
---------------------------------
Scenario : Marks are stored subject-wise for a student.

Test data:
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

Tasks:
    1. Calculate total marks
    2. Calculate average marks
    3. Find the highest scoring subject
    4. Add a new subject computer: 90*/
const marks = {
    maths: 78,
    physics: 65,
    chemistry: 82,
    english: 55
};
let totalMarks = 0;
let highestMark = 0;
let highestSubject = "";
for (let subject in marks) {
    totalMarks += marks[subject];
    if (marks[subject] > highestMark) {
        highestMark = marks[subject];
        highestSubject = subject;
    }
}
let averageMarks = totalMarks / Object.keys(marks).length;
marks.computer = 90;
console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks);
console.log("Highest Scoring Subject:", highestSubject, "with", highestMark, "marks");
console.log("Updated Marks:", marks);

/*Assignment 3: Application Settings Controller
---------------------------------------------
Scenario : A web app stores user preferences as settings.

Test data:
const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};


Tasks :
    1.Toggle theme between "light" and "dark"
    2. Turn autoSave to true
    3. Remove the notifications setting
    4. Freeze the settings object so it cannot be modified*/
const settings = {
    theme: "light",
    notifications: true,
    autoSave: false,
    language: "en"
};
settings.theme = settings.theme === "light" ? "dark" : "light";
settings.autoSave = true;
delete settings.notifications;
Object.freeze(settings);
console.log("Updated Settings:", settings);
