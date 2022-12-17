


// seleccionario un elemento y agregarle eventos.

const enviarForulario= document.querySelector(".boton--primario");

//Ahora vamos a validar el formulario
// declarar un  objeto con los campos de formulario
const datosF={
  nombre:'',
  email:'',
  mensaje:''
 } 
//eventos de los iputs y textarea
const nombreFor=document.querySelector("#nombre")
const emailFor=document.querySelector("#email")
const mensajeFor=document.querySelector("#mensaje")
const formulario=document.querySelector('.contacto-form')

nombreFor.addEventListener('input', leerEntrada);
emailFor.addEventListener('input', leerEntrada);
mensajeFor.addEventListener('input', leerEntrada);

 // Agregar evento de submit al form e input para enviarlo
 
 formulario.addEventListener('submit', function(evento){
  formulario.preventDefault();
  console.log("enviando");
 });
 
 enviarForulario.addEventListener('click', function(evento){
  console.log('enviando info');
  // previene el envio por default
  evento.preventDefault();
})

//¿Cuando usar cual?  normalmente se usa submit en un formulario y el evento click es mejor para iagen, agregar elementos y el resto de cosas 

function leerEntrada(evento){
  //aqui se dice que inserta info en .id que signifca que el ide del html y el nombre dentro del objeto sean el mismo, si no, no funciona
  datosF[evento.target.id]=evento.target.value;
  console.log(datosF)
 };
 console.log(datosF.nombre)





