/*iii. app.js - Main application
                  // TODO: Import task functions
                  // import { ... } from './task.js';
                  // Test your module system
                  // 1. Add some tasks
                  // 2. Display all tasks
                  // 3. Complete a task
                  // 4. Display all tasks again*/

// iii. app.js - Main application
import { addTask, getAllTasks, completeTask } from './task.js'; 
// Test your module system
// 1. Add some tasks
console.log(addTask("Buy groceries", "high", new Date(Date.now() + 86400000))); // valid
console.log(addTask("Do", "medium", new Date(Date.now() + 86400000))); // invalid title
console.log(addTask("Clean house", "urgent", new Date(Date.now() + 86400000))); // invalid priority
console.log(addTask("Pay bills", "low", new Date(Date.now() - 86400000))); // invalid due date 
// 2. Display all tasks
console.log("All Tasks:", getAllTasks());
// 3. Complete a task
console.log(completeTask(1)); // complete task with id 1
// 4. Display all tasks again
console.log("All Tasks after completion:", getAllTasks());