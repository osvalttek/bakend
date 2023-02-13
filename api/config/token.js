import jwt from "jsonwebtoken"
import "dotenv/config"

const secret = process.env.SECRET


export const generateToken = (payload) => {
    const token = jwt.sign({payload}, secret, { expiresIn: '2d' });
    console.log(token)
    return token
}


export const verify = (token) => {
    return jwt.verify(token, secret)
}