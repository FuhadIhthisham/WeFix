import axios from "axios";

const config = {
    header: {
        "Content-type": "application/json"
    }
}

export const verifyLogin = async (formValues) => {

    try {   
        const { data } = await axios.post('/login', {
            email: formValues.email,
            password: formValues.password,
        }, config )
    
        return new Promise(async (resolve, reject) => {
            resolve(data)
        })
    
    } catch (err) {
        return new Promise(async (resolve, reject) => {
            reject(err)
        })
    }
}

export const verifyGoogleLogin = async (formValues) => {

    try {   
        const { data } = await axios.post('/google-login', {
            email: formValues.email,
            googleId: formValues.googleId,
        }, config )
    
        return new Promise(async (resolve, reject) => {
            resolve(data)
        })
    
    } catch (err) {
        return new Promise(async (resolve, reject) => {
            reject(err)
        })
    }
}

export const verifyOTP = async (otp) => {
    try {   
        const { data } = await axios.post('/verifyOTP', {
            emailOTP: otp
        }, config )

        return new Promise(async (resolve, reject) => {
            resolve(data)
        })

    } catch (err) {
        return new Promise(async (resolve, reject) => {
            reject(err)
        })
    }
}

export const verifyUserSignup = async(signupValues) => {
    try {

        const { data } = await axios.post(
            "/signup",
            {
              username: signupValues.username,
              email: signupValues.email,
              password: signupValues.password,
            },
            config
          );
          
          return new Promise(async (resolve, reject) => {
            resolve(data)
        })

    } catch(err) {
        return new Promise(async (resolve, reject) => {
            reject(err)
        })
    }
}

export const verifyUserGoogleSignup = async(signupValues) => {
    try {

        const { data } = await axios.post(
            "/google-signup",
            {
              email: signupValues.email,
              firstName: signupValues.givenName,
              lastName: signupValues.familyName,
              googleId: signupValues.googleId
            },
            config
          );

          return new Promise(async (resolve, reject) => {
            resolve(data)
        })

    } catch(err) {
        return new Promise(async (resolve, reject) => {
            reject(err)
        })
    }
}
