let header = document.getElementById("header-main");
// TODO: la ruta de la imagen debe ser dinamica para otras vistas a 
// parte del index
/* <nav id="nav-main">
       <h1>
           <a href="#">
	       <img type="image/png" src="assets/img/logo_32.png"/>Academlo
	   </a>
       </h1>
       <button class="offcanvas-button">
           <i class="fa-solid fa-cart-shopping"></i>
       </button>
   </nav>`*/

// Ensamblar la barra de navegacion:
// 1° Especificar los elementos html de uso
let navbar = document.createElement("nav");
let h1 = document.createElement("h1");
let a = document.createElement("a");
let img = document.createElement("img");
let title = document.createTextNode("Academlo");
let button = document.createElement("button");
let i = document.createElement("i");

// 2° Asignar los atributos
navbar.setAttribute("id", "nav-main");
a.setAttribute("href", "#");
img.setAttribute("type", "image/png");
img.setAttribute("src", "assets/img/logo_32.png");
button.setAttribute("class", "offcanvas-button");
i.setAttribute("class", "fa-solid fa-cart-shopping");

// 3° Construir la jerarquia de elementos
button.appendChild(i);
a.appendChild(img);
a.appendChild(title);
h1.appendChild(a);
navbar.appendChild(h1);
navbar.appendChild(button); // el contenedor principal del navbar

function insertNavbar()
{
    
    // Si el header al cual vamos a insertar el navbar tiene hijos
    // debemos insertar el navbar en primer lugar, para eso necesitamos
    // una referencia al primer hijo del navbar
    let children = [].slice.call(header.children);
    if(children.length > 0)
    {
        header.insertBefore(navbar, children[0]);
    }else{
        header.appendChild(navbar);
    }
}

function navbarRun()
{
    insertNavbar();
}

export {navbarRun};


