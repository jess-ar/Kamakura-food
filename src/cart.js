

let checkoutIds = [ {
    id: 2,
    name: 'Shogun roll',
    description: 'Rollo de 8 piezas con espárrago frito, cangrejo y aguacate, albacora picante con salsa de soya y mostaza.',
    price: 8.25,
    category: "sushi"
},
{
    id: 3,
    name: 'Paitan Ramen',
    description: 'Paitan significa sopa blanca en japonés, cremoso y aterciopelado a base de verduras y pollo, cocido según la tradición.',
    price: 12.00,
    category: "ramen"
}]
//Verificar si el product ya está en checkoutIds
function addProductIdToCheckout (product) {
    if (!checkoutIds.some(item=>item.id=== product.id)){
      checkoutIds.push(product)
    }
}
// Función para obtener array de precios
function getallPrices(checkoutIds) {

     const prices = checkoutIds.map(product=>product.price)
    return prices 
}
// Función para aumentar la cantidad del carrito

let increaseButton = document.getElementById('increase');
let decreaseButton = document.getElementById('decrease');
let quantityText = document.querySelector('.quantity');
let inicio= 0;

increaseButton.addEventListener('click', function() {
    // Incrementa la cantidad
    let quantity = parseInt(quantityText.textContent);
    quantity++;
    quantityText.textContent = quantity;
});


decreaseButton.addEventListener('click', function() {
    // Disminuir la cantidad
    if (quialityText= null ){ /* "use strict */
    }else {
    let quantity = parseInt(quantityText.textContent)
    quantity--;
    quantityText.textContent = quantity;
    }
});



