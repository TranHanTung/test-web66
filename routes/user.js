const express = require('express')
const jwt = require ('jsonwebtoken')
const {users, userModel } = require('../models/user')

const userRouter = express.Router()

const authorizationCheck = (req, res, next) => {
    const userRoles = req.user.role
    console.log(userRoles)
    if (userRoles.includes('admin')) {
      next()
    } else {
      res.send(false)
    }
  
  }

userRouter.get('/', authorizationCheck, async (req, res) => {
    try {
      const users = await userModel.find({})
      res.send(users)
    } catch (error) {
      res.send('Error')
      console.log(error)
    }
  
})
  

//import db
userRouter.post('/', async(req, res) => {
    try {
        const { username, password } = req.body    
        const allUser = await userModel.create({username, password})
        res.send(allUser)
    } catch (error) {
        res.send('error')
    }
})

module.exports = {userRouter}