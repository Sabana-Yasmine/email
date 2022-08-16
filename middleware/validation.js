//install joi package for validation

const validation = require('joi');


const joiSchema=validation.object({
    username:validation.string().pattern(new RegExp(/^[A-Za-z]+$/)).min(3).max(20).required(),
    email:validation.string().pattern(new RegExp(/^[A-Za-z0-9_.-]+@[a-zA-Z0-9.-]+$/)).required(),
    phoneNumber:validation.string().pattern(new RegExp(/^[0-9]+$/)).length(10).required(),
    password:validation.string().min(6).required(),
    address:validation.string().min(10).max(150).required(),
    pincode:validation.string().pattern(new RegExp(/^[0-9]+$/)).length(6).required()
})

module.exports = {joiSchema:joiSchema};