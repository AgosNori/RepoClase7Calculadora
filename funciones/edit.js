 const fs = require("fs");
 const data = fs.readFileSync("./data.josn","utf-8");
 const dataParseada = JSON.parse(data);


function edit(titulosEditar,nuevaDescripcion){
    
    
    const nuevoArray = dataParseada.map(item => {
        if (item.titulo === titulosEditar ){
         return(item.descripcion ===nuevaDescripcion);
        }
        return item;
    });
    console.log(nuevoArray);

}
module.exports={edit};