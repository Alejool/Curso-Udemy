




const datosF={
  nombre:'',
  email:'',
  mensaje:''
 } 

 const enviarFormulario= document.querySelector(".boton--primario");
const nombreFor=document.querySelector("#nombre")
const emailFor=document.querySelector("#email")
const mensajeFor=document.querySelector("#mensaje")
const formulario=document.querySelector('.contacto-form')

nombreFor.addEventListener('input', leerEntrada);
emailFor.addEventListener('input', leerEntrada);
mensajeFor.addEventListener('input', leerEntrada);


 formulario.addEventListener('submit', function(evento){
  evento.preventDefault();
  //destructing 
  const {nombre, email, mensaje}=datosF;

  if(nombre===''|| email===''||mensaje===''){
    mostrarError("Debes llenar todos los datos");
    return;
  }

  envioCorrecto();


 });
 



function leerEntrada(evento){
  
  datosF[evento.target.id]=evento.target.value;
  // console.log(datosF)
 };
//  console.log(datosF.nombre)



//funcion de mostrarerror
function mostrarError(mensaje){
 const error=document.createElement('P');
 error.textContent=mensaje;
 error.classList.add("errorFor");


 formulario.appendChild(error);

 setTimeout(()=>{
  error.remove();
 },3000)


}

function envioCorrecto(){
  const envioCorrect=document.createElement('P');
  envioCorrect.textContent="Envio exitoso";
  envioCorrect.classList.add("envioCorrect");
 
 
  formulario.appendChild(envioCorrect);
 
  setTimeout(()=>{
    envioCorrect.remove();
  },3000)
 
 
 }

