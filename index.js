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



const dateReport = (user) => {
    let date = Date()
    fs.appendFileSync('./text.txt', `${user}- ${date}\n`, 'utf-8')
}
// dateReport("kuka")

const readDateReport = () => {
    try {
        const read = fs.readFileSync("./text.tt", 'utf-8')
        console.log("🚀 ~ file: index.js:46 ~ readDateReport ~ read", read)
    } catch (error) {
        console.log("🚀 ~ file: index.js:47 ~ readDateReport ~ error", error.code)
    }
}
// readDateReport()
// --------------------------------------------------
// fs con callbacks
// cb=callback
function name(nombre, fn) {
    return fn(nombre)
}
function saludar(nombre) {
    console.log(`hola ${nombre}`)
}
// name("kuka", saludar)

// fs.writeFile(ruta, dato, cb)
const writecb = () => fs.writeFile('./fstext.txt', "texto con callback", error => {
    if (error) {
        console.log("🚀 ~ file: index.js:68 ~ error", error)
    } else {
        console.log("esta todo ok, el archivo se creo con exito")
    }
})
// writecb()

// funciones closure
function apellido(params) {
    console.log("🚀 ~ file: index.js:74 ~ params", params)
}
function hola() {
    return apellido("lolo")
}
// hola()


// fs.unlink(ruta, cb)
const delcb = () => fs.unlink('/fstext.txt', error => {
    if (error) {
        console.log("🚀 ~ file: index.js:87 ~ delcb ~ error", error.code)
    }
    console.log("🚀 se boorro")
})

// delcb()

// -----------------------
// ejercicio
// Escribir un programa ejecutable bajo node.js que realice las siguientes acciones:
// A) Abra una terminal en el directorio del archivo y ejecute la instrucción: npm init -y.
//     Esto creará un archivo especial (lo veremos más adelante) de nombre package.json

// B) Lea el archivo package.json y declare un objeto con el siguiente formato y datos:
// const info = {
//     contenidoStr: (contenido del archivo leído en formato string),
//     contenidoObj: (contenido del archivo leído en formato objeto),
//     size: (tamaño en bytes del archivo)
// }

const r = () => fs.readFile("./package.json", (error, data) => {
    const info = {
        contenidoStr: "",
        contenidoObj: "",
        size: 0
    }
    if (error) throw error;
    info.contenidoStr = JSON.stringify(data)
    info.contenidoObj = JSON.parse(data)
    info.size = info.contenidoStr.length

    const dataStr = JSON.stringify(info, null, 2)
    fs.writeFile('./info.txt', dataStr, error => {
        if (error) throw error;
        console.log("🚀 ~se creo el archivo con la info:", info)
    })
})

// r()

// C) Muestre por consola el objeto info luego de leer el archivo
// D) Guardar el objeto info en un archivo llamado info.txt dentro de la misma carpeta de package.json
// E) Incluir el manejo de errores (con throw new Error)
// Aclaraciones:
// - Utilizar la lectura y escritura de archivos en modo asincrónico con callbacks.
// - Consigna B): Para deserializar un string con contenido JSON utilizar JSON.parse (convierte string en object).
// - Consigna C): Para serializar un objeto (convertirlo a string) y guardarlo en un archivo utilizar JSON.stringify.

// Ayuda:
// Para el Punto 3 considerar usar JSON.stringify(info, null, 2) para preservar el formato de representación del objeto en el archivo (2 representa en este caso la cantidad de espacios de indentación usadas al representar el objeto como string).
// --------------------------------------------------------------
// fs con promesas
let info
const readPromise = () => {
    fs.promises.readFile('./info.txt', 'utf-8')
        .then(data => {
            info = data
            return info
        })
        .then(info => console.log("🚀 ~ file: index.js:142 ~ readPromise ~ info", info))
        .catch(error => {
            console.log("🚀 ~ file: index.js:147 ~ readPromise ~ error", error)
        })

}

// console.log("🚀 ~ file: index.js:141 ~ readPromise ~ readPromise", readPromise())
// readPromise()
let dataAA
const readPromiseAA = async () => {
    try {
        dataAA = await fs.promises.readFile('./info.txt', 'utf-8')
        console.log("🚀 ~ file: index.js:158 ~ readPromiseAA ~ data", dataAA)

    } catch (error) {
        console.log("🚀 ~ file: index.js:161 ~ readPromiseAA ~ error", error)

    }

}
// readPromiseAA()