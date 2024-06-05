//Intenta separar los eventos en este archivo.
import { addToCart } from './cart.js';


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
        addButton.addEventListener('click', function () {
            addToCart();
        })
    });

});