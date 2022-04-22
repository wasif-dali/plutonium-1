const req = require("express/lib/request")
const userModel = require("../models/userModel")
const UserModel= require("../models/userModel")

const createUser = async function(req, res) {
    let userDetails = req.body
    userDetails.isFreeAppUser = req.appTypeFree
    
    let userCreated = await userModel.create(userDetails)
    res.send({status: true, data: userCreated})
}

module.exports.createUser = createUser
