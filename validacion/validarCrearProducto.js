export default function validarCrearProducto(valores){
    
    let errores ={};
    
    //validar el nombre de usuario
    if(!valores.nombre){
        errores.nombre = "El Nombre es Obligatorio";
    }

    //Validar empresa
    if(!valores.empresa){
        errores.empresa = "Nombre de Empresa es obligatorio";
    }

    //Validar la url
    if(!valores.url){
        errores.url = "La URL del producto es obligatoria";
    }else if(!/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url)){
        errores.url="URL mal formateada o no válida"
    }

    //Validar descripcion
    if(!valores.descripcion){
        errores.descripcion="Agrega una descripcion a tu producto"
    }

    return errores;
}