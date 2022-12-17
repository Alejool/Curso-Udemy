


console.log(1);
console.log(2);
// load: espera hasta que carguen todos los documentos
window.addEventListener('load', function(){
  console.log(3);
});

window.onload=function(){
  console.log(4);
}


//DOMContentLoaded: solo espera hastq que cargue el html para ejecutarse
window.addEventListener('DOMContentLoaded',function(){
  console.log(6);
} )
document.addEventListener( 'DOMContentLoaded', function(){
  console.log(5);
})

//nota: en este caso al ejecutar el windows, primero se descargas todas las ojas de estilo, por eso, primero se ejecuta el 5 que el 6 despues los load.

// Tambien puede ser asi:
document.addEventListener( 'DOMContentLoaded', cargarHtml)
function cargarHtml(){
  console.log('ya esta cargado');
}



