

const cart = [];

function addToCart(product) {
    const existingProduct = cart.find(p => p.id === product.id);
    if (existingProduct) {
        increaseQuantity(existingProduct);
    } else {
        product.quantity = 1;
        product.subtotal= product.quantity* product.price
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
                <h5 id ="price-${product.id}">${(product.subtotal).toFixed(2)} €</h5>
            </div>
            <div class="quantity-container">
                <button id='increase-${product.id}'>+</button>
                <p class="quantity" data-product="${product.id}">${product.quantity}</p>
                <button id='decrease-${product.id}'>-</button>
            </div>`;

        const increaseButton = cartContainer.querySelector(`#increase-${product.id}`);
        const decreaseButton = cartContainer.querySelector(`#decrease-${product.id}`);
        const closeButton = cartContainer.querySelector(`#close-${product.id}`);

        increaseButton.addEventListener('click', () =>{increaseQuantity(product)
            updateSubtotal(product)
            

        });
        decreaseButton.addEventListener('click', () => {decreaseQuantity(product)
            updateSubtotal(product)
       

    });
        closeButton.addEventListener('click', () => removeProduct(product));


        cartProducts.appendChild(cartContainer);
    });
    cartTotal()
}

function updateSubtotal(product){
    
const subtotal = product.price* product.quantity
const subtotalElement = document.getElementById(`price-${product.id}`)


if (subtotalElement){
subtotalElement.innerHTML = subtotal.toFixed(2)
}
product.subtotal= subtotal
console.log(product.subtotal)
cartTotal()
} 

function cartTotal(){
const total  = cart.reduce((total, product) => total + product.subtotal, 0);

const cartTotal = document.getElementById("cart-total");
if (cartTotal){
    cartTotal.innerHTML= total
}
console.log(cart)

}


export { addToCart }
