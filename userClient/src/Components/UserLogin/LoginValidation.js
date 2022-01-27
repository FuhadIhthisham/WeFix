const loginValidate = (values) =>{
    const errors = {}
    const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i

    if(!values.email){
        errors.email = 'Email is required !'
    }
    else if(!regex.test(values.email)){
        errors.email = 'This is not a valid email !'
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
    return errors
}
export default loginValidate