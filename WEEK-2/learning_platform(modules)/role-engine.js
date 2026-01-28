// MODULE 4: ROLE & PERMISSION ENGINE
//   -> Get all role names
//   -> Check if student can delete
//   -> Create a flat list of all unique permissions
//   -> Add new role moderator immutably


//given data
const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"]
};

//1.Get all role names
    let roleNames=Object.keys(roles)
    console.log("role names are:",roleNames);

//2.Check if student can delete
    let checkStudentCanDelete=roles.student.includes("delete")
    console.log("student has delete permission:",checkStudentCanDelete)

//3. Create a flat list of all unique permissions
    let allUniquePermissions=[... new Set(Object.values(roles).flat())]
    console.log(allUniquePermissions)
//4.Add new role moderator immutably
    let updatedRole={
        ...roles,
        moderator:['create','view']
    }
    console.log(updatedRole)