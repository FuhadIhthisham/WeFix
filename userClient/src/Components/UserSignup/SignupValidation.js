const signupValidate = (values) =>{
    const errors = {}
    const regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i

    if(!values.email){
        errors.email = 'Email is required !'
    }
    else if(!regex.test(values.email)){
        errors.email = 'This is not a valid email !'
    }

    if(!values.username){
        errors.username = 'Username is required !'
    }
    else if (values.username.length < 4){
        errors.username = 'Username must be more than 4 characters !'
    }
    else if (values.username.length > 10){
        errors.username = 'Username must be less than 10 characters !'
    }
    
    if(!values.password){
        errors.password = 'Password is required !'
    }
    else if (values.password.length < 6){
        errors.password = 'Password must be more than 5 characters !'
    }
    else if (values.password.length > 14){
        errors.password = "Password must be less than 15 characters !"
    }

    if(!values.retypePass){
        errors.retypePass = 'You must confirm password !'
    }
    else if (values.password !== values.retypePass){
        errors.retypePass = "Passwords don't match !"
    }
    
    return errors
}
export default signupValidate