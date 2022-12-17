
//SELECCIONAR CONTENIDO

// 1) QUERYselector
     // retorna 0 o 1 elemento, por ejemplo si pedimos un enlace de todos los que hay solo retorna 1 maximo... si no escribes bien dice que esta vacio (null)


/*  const heading= document.querySelector(".header_texto h2");
  const encabezado= document.querySelector('#heading');
  console.log(encabezado);
  console.log(heading);
 
  // text.content: cambia el texto de la selección
  heading.textContent="Blog ";
 
  //classList-add: Agrega nueva clase al objeto seleccionado
  heading.classList.add('clase-nueva');*/






// 2) QUERYselectorAll
  //Retorna de 0 hasta los elementos que hayan

/* const enlaces= document.querySelectorAll(".navegacion a");
  //para hallar uno especifico es usar sintaxis de arreglos
  console.log(enlaces[0]);
  // remove clases 
  // enlaces[1].classList.remove("navegacion__enlace")

 */


// cambia el nombre a 1
  //  enlaces[0].textContent="1";
        //return 1

//  Tambien puede cambiar la direeción a la cual lleva el enlcce por ejemplo (que va a facebook)
   //  enlaces[0].href="https://www.facebook.com/"

    // forma más corta de realizarlo
//cambia el nombre del sehundo enlace a 2
  // document.querySelectorAll(".navegacion a")[1].textContent="2";
    //return 2


  
  


// 3) GETelementById
const title=document.getElementById("heading");
console.log(title);
title.textContent="getElementId";