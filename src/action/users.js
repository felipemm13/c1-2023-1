import jsonData from './../dataset/users_info.json'
let data=[]
data=jsonData
exports.searchName = (name) =>{
    // busco el nombre, ordeno el array, y lo almaceno en un json para ser retornado
    let array=[]
    let arrayOrdenado=[]
    jsonData.forEach(element => {
        if (element.name.includes(name)){
            array.push(element)
        }
        arrayOrdenado= array.sort((a, b) => a.age - b.age);
        //let archivoJSON = JSON.stringify(arrayOrdenado);
        return JSON.stringify(arrayOrdenado);
    });





}