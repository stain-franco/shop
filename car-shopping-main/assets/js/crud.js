const BASE_URL = "https://academlo-api-production.up.railway.app/api";
let editId = null;

function getProducts()
{
    axios.get(`${BASE_URL}/products`)
	.then((res) => {
            printProducts(res.data);
	})
	.catch((err) => {
            console.log(err);
	});
}

let productStorage = JSON.parse(localStorage.getItem("products")) || [];

function addProduct(id)
{
    axios.get(`${BASE_URL}/products/${id}`)
	.then((res) => {
            editId = id;
	    productStorage.push(res.data);
	    localStorage.setItem("products", JSON.stringify(productStorage));
	    location.reload();
	})
	.catch((err) => {
             console.log(err);
	});
}

function deleteProduct(id)
{   
    let prod2del = JSON.parse(localStorage.getItem("products"));
    let products = prod2del.filter(element => element.id !== id);
    
    localStorage.clear();
    localStorage.setItem("products", JSON.stringify(products));
    location.reload();	
}

export {
    getProducts,
    addProduct,
    deleteProduct
};
