const loginValidate = (values) =>{
    const errors = {}

    if(!values.email){
        errors.email = 'Username or Email is required !'
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