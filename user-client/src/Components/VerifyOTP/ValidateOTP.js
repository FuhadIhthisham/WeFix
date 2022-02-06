const validateOTP = (otp) => {
    let errors = ''
    const regex = /^[0-9]/

    if(otp.length < 6){
        errors = 'OTP must be 6 digit'
    }
    else if(!regex.test(otp)){
        errors = 'OTP must be a digit'
    }

    return errors
}   

export default validateOTP