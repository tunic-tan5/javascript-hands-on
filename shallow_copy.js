/*Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
-------------------------------------------------------
🧪 Given Data:
              const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

🎯 Task
    1. Create a shallow copy of user
    2. Change:
          i. name in the copied object
          ii. preferences.theme in the copied object
          iii .Log both original and copied objects
          iv. Observe what changes and what doesn’t*/
const user = {
    id: 101,
    name: "Ravi",
    preferences: {
      theme: "dark",    
      language: "en"
    }
  };    
    //create shallow copy of user
    const shallowCopyUser={...user};
    shallowCopyUser.name="Tanmai";
    shallowCopyUser.preferences.theme="light"; //modifying nested obj property
    console.log("Original User:",user);
    console.log("Shallow Copy User:",shallowCopyUser);
    //In original user obj, name remains same but theme is changed to light as nested obj is reference copied