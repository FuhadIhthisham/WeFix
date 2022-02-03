const nodeMailer = require('nodemailer')


function mailOTP(userEmail){

    var OTP = Math.floor(100000 + Math.random() * 900000)
    console.log(OTP);
    var mailRes
    var transporter = nodeMailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        service: 'Gmail',
    
        auth: {
            user: process.env.GMAIL,
            pass: process.env.GMAIL_PASS
        }
    })
    
    var output = `
        <p>We are sharing a verification code to access your account. The code is valid for 10 minutes and usable only once.</p>    
        <h3> Your OTP is </h3>
        <h1> ${OTP} </h1>
    `


    let mailOptions = {
        from: `"WeFix Account Verification" <${process.env.GMAIL}>`,
        to: userEmail,
        subject: 'This is for email verification of WeFix account',
        text: "THIS IS YOUR OTP",
        html: output 
    }

    transporter.sendMail(mailOptions,(error, info) => {
        if(error){
            return console.log(error);;
        }
        else{
            mailRes = true
            console.log('Message sent: ', info.messageId);
            console.log('Preview URL: ', nodeMailer.getTestMessageUrl(info));
            return mailRes
        }
    })
    return {userOtp: OTP,userMail: userEmail, mailResponse: true}
}

module.exports = mailOTP