//Intenta separar los eventos en este archivo.

document.addEventListener('DOMContentLoaded', function() {
    const cartButton = document.getElementById('cart');
    const cartContainer = document.getElementById('cart-container');

    cartButton.addEventListener('click', function() {
        if (cartContainer.style.display === 'none' || cartContainer.style.display === '') {
            cartContainer.style.display = 'flex';
        } else {
            cartContainer.style.display = 'none';
        }
    });
});