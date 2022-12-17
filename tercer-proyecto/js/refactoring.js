




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
    Alerta("Debes llenar todos los datos",false);
    return;
  }
  Alerta("Envio exitoso", true);
 });
 
 function leerEntrada(evento){
  
  datosF[evento.target.id]=evento.target.value;
  // console.log(datosF)
 };
// 

function Alerta(mensaje, error){
 const alerta=document.createElement('P');
 alerta.textContent=mensaje;

 if(error==false){
  alerta.classList.add("errorFor");
 }else{
  alerta.classList.add("envioCorrect");
 }

 formulario.appendChild(alerta);
 setTimeout(()=>{
  alerta.remove();
 },3000)

}

 




