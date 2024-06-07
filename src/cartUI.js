import {
    cartTotal,
    updateSubtotal,
    increaseQuantity,
    decreaseQuantity,
    removeProduct,
    cart,
} from './cart.js'


function displayCart() {
    const cartProducts = document.getElementById('cart-products');
    cartProducts.innerHTML = '';

    if (cart.length === 0) {
        cartProducts.innerHTML = `<h3>Añade un plato a tu menú</h3>`;
    } else {
        cart.forEach(product => {
            const cartItemElement = createCartItemElement(product);
            cartProducts.appendChild(cartItemElement);
        });

        cartTotal();
    }
}

function createCartItemElement(product) {
    const cartContainer = document.createElement('div');
    cartContainer.classList.add('cart-container');
    cartContainer.innerHTML = `
        <button class="close-button" id="close-${product.id}"><img src="./assets/img/close.svg" alt="close"></button>
        <div class="text-container">
            <h3>${product.name}</h3>
            <h5 id="price-${product.id}">${(product.subtotal).toFixed(2)} €</h5>
        </div>
        <div class="quantity-container">
            <button id='increase-${product.id}'>+</button>
            <p class="quantity" data-product="${product.id}">${product.quantity}</p>
            <button id='decrease-${product.id}'>-</button>
        </div>`;

    attachCartItemEvents(cartContainer, product);
    return cartContainer;
}


function attachCartItemEvents(cartContainer, product) {
    const increaseButton = cartContainer.querySelector(`#increase-${product.id}`);
    const decreaseButton = cartContainer.querySelector(`#decrease-${product.id}`);
    const closeButton = cartContainer.querySelector(`#close-${product.id}`);

    increaseButton.addEventListener('click', () => {
        increaseQuantity(product);
        updateSubtotal(product);
    });

    decreaseButton.addEventListener('click', () => {
        decreaseQuantity(product);
        updateSubtotal(product);
    });

    closeButton.addEventListener('click', () => removeProduct(product));
}


function updateDisplayQuantity(product) {
    const productElement = document.querySelector(`.quantity[data-product="${product.id}"]`);
    if (productElement) {
        productElement.innerHTML = product.quantity;
    }
}

function updateDisplaySubtotal(subtotal, product) {
    const subtotalElement = document.getElementById(`price-${product.id}`)
    if (subtotalElement) {
        subtotalElement.innerHTML = `${subtotal.toFixed(2)} €`;
    }

}

function updateDisplayTotal(total) {
    const cartTotal = document.getElementById("cart-total");
    if (cartTotal) {
        cartTotal.innerHTML = `Total: ${total.toFixed(2)} €`;
    }
}


export { displayCart, updateDisplayQuantity, updateDisplaySubtotal, updateDisplayTotal }; 