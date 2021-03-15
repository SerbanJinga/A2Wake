//@class register.js
//@module authentication
//@made_by Serban Jinga
//@function CTO @UNIQ AGENCY SRL C 2021

const Validator = require('validator')

const isEmpty = require('is-empty')

module.exports = function validateRegisterInput(data){
    let errors = {}


    // Convert empty fields to an empty string ==> hence, we can use all of the npm-validator functions & methods
    data.name = !isEmpty(data.name) ? data.name : ""
    data.email = !isEmpty(data.email) ? data.email : ""
    data.password = !isEmpty(data.password) ? data.password : ""
    data.repeatPassword = !isEmpty(data.repeatPassword) ? data.repeatPassword : ""


    // Checking the name using @npm-validator, version ^15.02.24
    if(Validator.isEmpty(data.name)){
        errors.name = "Name field is required."
    }

    // Checking the email using @npm-validator, --==--
    if(Validator.isEmpty(data.email)){
        errors.password = "Email field is required."
    }else if(!Validator.isEmpty(data.email)){
        errors.email = "Email is not valid."
    }

    // Checking the password and the repeated password using @npm-validator
    if(Validator.isEmpty(password)){
        errors.password = "Password is required."
    }
    
    if(Validator.isEmpty(repeatPassword)){
        errors.repeatPassword = "Repeated password is required."
    }

    // Checking if the repeated password matches the correct pattern of the password
    if(!Validator.equals(data.password, data.repeatPassword)){
        errrors.repeatPassword = "Passwords do not match."
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}