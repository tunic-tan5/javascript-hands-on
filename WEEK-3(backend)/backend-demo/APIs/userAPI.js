import exp from 'express';
//create mini express(sep route) app
export const userApp=exp.Router();
 
let users=[]
userApp.get('/users/:id',(req,res)=>{
    let userId = Number(req.params.id)
    let userObj=users.find((user)=>user.id===userId)
    if(!userObj){
        return res.status(404).json({message:"user not found"})
    }
    res.status(200).json({message:"user found",payload:userObj})        
})


//post req handling route
userApp.post('/user',(req,res)=>{
     let newUser=req.body
     users.push(newUser)
     res.status(201).json({message:"new user created",payload:newUser})
})
//put req handling route
 

     //if user not found, send resp as user not found
     //if user found then modify user
     userApp.put('/users', (req, res) => {
    let modifiedUser = req.body
     let userFound = users.findIndex(userObj => userObj.id === modifiedUser.id)
     if(userFound===-1){
        res.status(404).json({message:"user not found"})
     }
    users.splice(userFound,1,modifiedUser)
    res.status(200).json({message:"user modified",payload:modifiedUser})
})
 

     //send resp as user modified

//delete req handling route
userApp.delete('/users/:id',(req,res)=>{
    let userId=Number(req.params.id)  
    let userFound=users.findIndex((userObj)=>userObj.id===userId)
    if(userFound===-1){
        res.status(404).json({message:"user not found"})
    }
    users.splice(userFound,1)
    res.status(200).json({message:"user deleted"})

})
