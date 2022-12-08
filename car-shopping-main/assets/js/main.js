import {offcvRun} from "./offcanvas.js";
import {navbarRun} from "./navbar.js";
import {printProducts} from "./ui.js";
import {
    getProducts,
    addProduct,
    deleteProduct
} from "./crud.js";

// Ejecutar primero el navbar y luego el offcanvas
navbarRun();
offcvRun();

window.addProduct = addProduct;
window.deleteProduct = deleteProduct;
window.printProducts = printProducts;

getProducts(); // utiliza el printProducts, debe ir despues de su asignacion global
