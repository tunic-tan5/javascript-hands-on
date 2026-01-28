// MODULE-1 :USER PROCESSING ENGINE
//   -> Get only active users
//   -> Extract names of active users
//   -> Check if any admin exists
//   -> Find user by id
// //   -> Deactivate a user immutably

//given data
const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];
//1.Get only active users
    let activeUsers=users.filter(user => user.active)
    console.log("Active users are:",activeUsers);
//2.Extract names of active users
    let activeUserNames=activeUsers.map(user => user.name )
    console.log("Active user names",activeUserNames)
//3.Check if any admin exists
    let adminExist=users.some(user => user.role==="admin")
    let admin=users.filter(user => user.role==="admin")
    console.log("role with admin exist",adminExist)
    console.log("details of admin are:",admin)
//4.Find user by id
    //function that accepts two parameters with an array and id 
    //check whether given id matches in the users id
    function findUserById(users, id) {
        return users.find(user => user.id === id);
    }
    // finding user by id
    let userByID = findUserById(users, 3);
    console.log(userByID);
//5.Deactivate a user immutably
    const updatedUsers = users.map(user => user.id === 1 ? { ...user, active: false } : user);
    console.log(updatedUsers)