const fs = require("fs")
// console.log("🚀 ~ file: index.js:2 ~ fs", fs)
// fs sincronico

// fs.writeFileSync para escribir un archivo 
const write = () => fs.writeFileSync('./text.txt', "hola como estan?", 'utf-8')
//  write()
// fs.readFileSync esto es para leer un archivo de forma asincronica
const read = () => fs.readFileSync('./package.json', 'utf-8')
//  console.log("🚀 ~ file: index.js:9 ~ read", read())

// fs.appendFileSync esto es para actualizar el archivo

const append = () => fs.appendFileSync("./text.txt", "\npor lo general son gentes drogadas", "utf-8")
// append()

// fs.unlinkSync eliminar un archivo

const del = () => fs.unlinkSync('./text.txt')
// try {
//     del()
// } catch (error) {
//     console.log("🚀 ~ file: index.js:23 ~ error", error.code)
// }
// del()

// fs.existsSync esto es para saber si el archivo existe
const exist = () => fs.existsSync('./text.txt')
// console.log("🚀 ~ file: index.js:24 ~ exist", exist())

// fs.mkdirSync creacion de una carpeta
const mk = () => fs.mkdirSync('./prueba')
// mk()



const dateReport=(user)=>{
    let date= Date()
    fs.appendFileSync('./text.txt',`${user}- ${date}\n`, 'utf-8')
}
// dateReport("kuka")

const readDateReport=()=>{
    try {
        const read=fs.readFileSync("./text.tt", 'utf-8')
        console.log("🚀 ~ file: index.js:46 ~ readDateReport ~ read", read) 
    } catch (error) {
        console.log("🚀 ~ file: index.js:47 ~ readDateReport ~ error", error.code)   
    }
}
readDateReport()
