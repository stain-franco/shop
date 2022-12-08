let products = JSON.parse(localStorage.getItem("products")) || [];
let html = `
<span class="offcanvas-button">
    <i class="fa-solid fa-xmark"></i>
</span>
<h3>Carrito de compras</h3>
`;

for(let product of products)
{
    let price = parseFloat(product.price).toFixed(2);
    html += `
    <figure>
        <img type="image/jpg" src="${product.images.image1}"/>
        <div>
            <p>${product.name}</p>
            <p>\$${price}</p>
        </div>
        <figcaption>
            <p>Subtotal:</p><p>\$${price}</p>
        </figcaption>
        <button onclick="deleteProduct(${product.id})">
            <i class="fa-solid fa-trash-can"></i>
        </button>
    </figure>
    <hr/>
    `;
}

html += `
<footer class="footer-main">
    <button>
        Ir al carrito
    </button>     
</footer>
`;

let section = document.createElement("section");
section.setAttribute("class", "offcanvas close-offcanvas");
section.innerHTML = html; // contenedor principal del offcanvas

function insertOffcanvas()
{
    document.getElementById("nav-main").appendChild(section);
}

function offcvRun()
{
    insertOffcanvas(); // 1° se inserta en el DOM
    
    // 2° se localiza dentro del DOM
    let offcanvas = document.getElementsByClassName("offcanvas");
    let offcanvasButtons = document.getElementsByClassName("offcanvas-button");
	
    offcanvas = [].slice.call(offcanvas);
    offcanvasButtons = [].slice.call(offcanvasButtons);

    function openOrClose()
    {
        for(let offcv of offcanvas)
        {
            offcv.classList.toggle("close-offcanvas");
        }
    }

    function offcvOn()
    {   
        for(let button of offcanvasButtons)
        {
            button.onclick = openOrClose;
        }
    }
   
    offcvOn(); // 3° se activa
}

export {offcvRun};
