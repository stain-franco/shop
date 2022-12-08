function printProducts(products) {
    // 1° Identificar el contenedor
    const container = document.getElementById('products');
    
    // 2° Generar el HTML
    let html = '';
    
    for(let i = 0; i < products.length; i++)
    {
        html += `
            <li class="card">
	        <figure>
		    <img type="image/jpg" src="${products[i].images.image1}"/>
		    <!--MUTE <img type="image/jpg" src="${products[i].images.image2}"/>-->
	            <figcaption>
		        ${products[i].name}
	            </figcaption>
	        </figure>
	        <p>
		    <span class="product-variant"></span>
		    <span class="product-variant"></span>
		    \$${parseFloat(products[i].price).toFixed(2)}
	        </p>
		<button onclick="addProduct(${products[i].id})">
		     <i class="fa-solid fa-cart-plus"></i>
		</button>
	    </li>
	`;
    }
    // 3° Imprimir el HTML
    container.innerHTML = html;
}

export {printProducts};

