import axios from "axios";

const config = {
    header: {
        "Content-type": "application/json"
    }
}

export const verifyLogin = async (formValues) => {
    try {
        const { data } = await axios.post(
            '/admin/login',
            {
                email : formValues.email,
                password: formValues.password
            },
            config
        )
        return new Promise(async (resolve, reject) => {
            resolve(data)
        })
    } catch(err) {
        return new Promise(async (resolve, reject) => {
            reject(err)
        })
    }
}