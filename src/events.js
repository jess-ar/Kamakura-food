//Intenta separar los eventos en este archivo.
import { products } from '../assets/data/data.js';
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