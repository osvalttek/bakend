import nodemailer from "nodemailer"
import "dotenv/config"

const user = process.env.MAILERUSER
const password = process.env.MAILERPASSWORD


const mailer = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: user,
        pass: password,
    },
});


export default mailer