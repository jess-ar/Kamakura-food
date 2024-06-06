//Intenta separar los eventos en este archivo.
import { products } from '../assets/data/data.js';
import { addToCart } from './cart.js';
import { showReceipt, closeReceipt } from './receipt.js';


document.addEventListener('DOMContentLoaded', function () {
    // SHOW CART
    const cartButton = document.getElementById('cart');
    const cartContainer = document.getElementById('cart-container');
    cartButton.addEventListener('click', function () {
        if (cartContainer.style.display === 'none' || cartContainer.style.display === '') {
            cartContainer.style.display = 'flex';
        } else {
            cartContainer.style.display = 'none';
        }
    });


    // ADD TO CART
    const addButtons = document.querySelectorAll('.add-button');
    addButtons.forEach(addButton => {
        addButton.addEventListener('click', function (e) {
            const id = parseInt(e.target.getAttribute('id'), 10);
            const product = products.find(product => product.id === id);
            addToCart(product);
        })
    });



    // const plusButton = document.querySelector("#quantity > button:first-child");
    // plusButton.addEventListener('click', function () {

    //     addProduct(product);
    // });

});


// SHOW RECEIPT
// con esto obtengo el boton de proceder al pago
const proceedPayButton = document.getElementById('proceedPay-button');
proceedPayButton.addEventListener('click', function () {   
    const receiptContainer = document.getElementById('receipt-container');  //obtengo el contededor del recibo
    const productsContainer = document.getElementById('products-container');  //obtengo el contenedor del productos del carrito
    productsContainer.appendChild(receiptContainer); // Inserta el contenedor del recibo dentro del contenedor de productos
    const cartProducts = document.getElementById('cart-products');
    cartProducts.style.display = 'none';   // Oculta los productos del carrito
    showReceipt();  // Muestra el recibo
});

// CLOSE RECEIPT
const closeReceiptButton = document.getElementById('close-receipt'); // Obtiene el botón de cerrar recibo
closeReceiptButton.addEventListener('click', function () {
    const cartProducts = document.getElementById('cart-products'); // Obtiene el contenedor de los productos del carrito
    cartProducts.style.display = 'block'; // Muestra los productos del carrito nuevamente
    closeReceipt(); // Cierra el recibo
});

