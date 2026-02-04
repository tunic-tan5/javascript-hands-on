//create http server
//import express module
import exp from 'express'
//create server
const app=exp()
//assign port number
app.listen(3000,()=>console.log('HTTP server listeneing on port 3000...'))

//body parsing middleware
app.use(exp.json()) //to parse json body

//import userAPI
import { userApp } from './APIs/userAPI.js'
//mount userApp on server app
app.use('/user-api',userApp)
//import productAPI
import { productApp } from './APIs/productAPI.js'
//mount productApp on server app
app.use('/product-api',productApp)
