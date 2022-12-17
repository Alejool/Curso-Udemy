


  //generar un nuevo enlace
// createElement= permite crear codigo en el html
// EJEMPLO: A SIGNIFICA CREAR UN ENLACE
 const nuevoEnlace= document.createElement("A")

 //agregamos la dirreccion
 nuevoEnlace.href="https://www.bonviveur.es/lifestyle/los-mejores-cafes-del-mundo"

 //Agregar class
 nuevoEnlace.classList.add("navegacion__enlace");

 //agregat¿r contenido
 nuevoEnlace.textContent='Mejores Cáfes'

 //Agregarlo al documento
 const agregar=document.querySelector(".navegacion")
agregar.appendChild(nuevoEnlace);



 