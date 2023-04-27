const {list} = require("./list");


function find(param){
    const titulos = list();
    const resultado = titulos.includes(param);
    return resultado
}
module.exports={find};