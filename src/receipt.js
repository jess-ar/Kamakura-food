import { getCartItems, getCartTotal } from './cart.js';



// Función para mostrar el recibo
function showReceipt() {
    const receiptContainer = document.getElementById('receipt-container');
    const receiptProductsContainer = document.getElementById('receipt-product');
    const receiptTotal = document.getElementById('receipt-total');

    // Obtiene los artículos del carrito
    const cartItems = getCartItems();
    receiptProductsContainer.innerHTML = ''; // Limpia los artículos anteriores del recibo

     // Recorre cada producto en el carrito
    cartItems.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('receipt-product');
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <div class="receipt-price">
                <p>Cantidad: ${product.quantity}</p>
                <h5>Subtotal: ${(product.price * product.quantity).toFixed(2)} €</h5>
            </div>`;
        // Añade el producto al contenedor del recibo
        receiptProductsContainer.appendChild(productElement);
    });

    
    receiptTotal.innerHTML = `Total: ${getCartTotal().toFixed(2)} €`;  // Actualiza el total del recibo
    receiptContainer.style.display = 'flex';  // Muestra el contenedor del recibo
}


// Función para cerrar el recibo
function closeReceipt() {
    const receiptContainer = document.getElementById('receipt-container');
    receiptContainer.style.display = 'none';  // Oculta el contenedor del recibo
}

export { showReceipt, closeReceipt };