import axios from "axios";

const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

export const verifyLogin = async (formValues) => {
    try{
        const { data } = await axios.post(
        "/worker/login",
        {
            email: formValues.email,
            password: formValues.password,
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


export const verifySignup = async(signupValues) => {
    try{
        const { data } = await axios.post(
        "/worker/signup",
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

export const verifyOTP = async (otp) => {
    try {   
        const { data } = await axios.post('/worker/verifyOTP', {
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