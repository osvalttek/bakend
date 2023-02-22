import mailer from "../../config/mailer.js";
import "dotenv/config"

const user = process.env.MAILERUSER


const registerMail = async (name, email) => {
    await mailer.sendMail({
        from: `"Fred Foo 👻" ${user}`,
        to: `${email}`,
        subject: "Registro exitoso ",
        text: "Hello world?",
        html: `<h2>Gracias por registrarte ${name}</h2>`,
    });
}

export default registerMail