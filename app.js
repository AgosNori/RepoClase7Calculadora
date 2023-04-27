//const fs = require ('fs')
//let data = fs.readFileSync("./data.json", "utf-8")
//let dataParseada = JSON.parse(data)
//console.log(data[0].titulo)
//console.log('-------------------------------')
//console.log(dataParseada[0].titulo)

const {list }= require("./funciones/list");
//console.log(list())
const {find}=require("./funciones/find");
//console.log(find('estudiar js'));
const {edit}=require("./funciones/edit");
edit("estudiar cocina","nueva descripcion holandaa")