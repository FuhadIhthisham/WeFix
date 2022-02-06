import axios from "axios";

const config = {
    header: {
        "Content-type": "application/json"
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
