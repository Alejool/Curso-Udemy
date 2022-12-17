


const historiaCafe= document.createElement("A")

//agregamos la dirreccion
historiaCafe.href="https://sehablacafe.com/hablemos/que-es-el-cafe/"

//Agregar class
historiaCafe.classList.add("navegacion__enlace");

//agregat¿r contenido
historiaCafe.textContent='Historia'

//Agregarlo al documento
const agregar=document.querySelector(".navegacion")
agregar.appendChild(historiaCafe);



