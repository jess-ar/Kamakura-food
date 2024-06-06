//DEBE contener las funcionalidades del carrito de compras.

const cart = [];

function addToCart(product) {
    const existingProduct = cart.find(p => p.id === product.id);
    if (existingProduct) {
        increaseQuantity(existingProduct);
    } else {
        product.quantity = 1;
        cart.push(product);
    }
    displayCart();
}

function increaseQuantity(product) {
    product.quantity++;
    updateDisplayQuantity(product);
}

function decreaseQuantity(product) {
    if (product.quantity > 1) {
        product.quantity--;
        updateDisplayQuantity(product);
    } else {
        removeProduct(product);
    }
}

function updateDisplayQuantity(product) {
    const productElement = document.querySelector(`.quantity[data-product="${product.id}"]`);
    if (productElement) {
        productElement.innerHTML = product.quantity;
    }
}


function removeProduct(product) {
    let index = cart.indexOf(product);
    cart.splice(index, 1);
    displayCart();

}

function displayCart() {
    const cartProducts = document.getElementById('cart-products');
    cartProducts.innerHTML = '';  
    cart.forEach(product => {
        const cartContainer = document.createElement('div');
        cartContainer.classList.add('cart-container');
        cartContainer.innerHTML = `
            <button class="close-button" id="close-${product.id}"><img src="./assets/img/close.svg" alt="close"></button>
            <div class="text-container">
                <h3>${product.name}</h3>
                <h5>${product.price} €</h5>
            </div>
            <div class="quantity-container">
                <button id='increase-${product.id}'>+</button>
                <p class="quantity" data-product="${product.id}">${product.quantity}</p>
                <button id='decrease-${product.id}'>-</button>
            </div>`;

        const increaseButton = cartContainer.querySelector(`#increase-${product.id}`);
        const decreaseButton = cartContainer.querySelector(`#decrease-${product.id}`);
        const closeButton = cartContainer.querySelector(`#close-${product.id}`);

        increaseButton.addEventListener('click', () => increaseQuantity(product));
        decreaseButton.addEventListener('click', () => decreaseQuantity(product));
        closeButton.addEventListener('click', () => removeProduct(product));


        cartProducts.appendChild(cartContainer);
    });
}


//SHOW-RECEIPT
function getCartItems() { //con esto obtengo los articulos del carrito
    return cart;
}

function getCartTotal() { //con esto tengo el total del carrito
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
}

export { addToCart, getCartItems, getCartTotal }; //AÑADIDO  getCartItems, getCartTotal


