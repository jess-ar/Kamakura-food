//DEBE contener las funcionalidades del carrito de compras.

const cart = [];


function addToCart (product){
    product.quantity = 1;
    cart.push(product);
}

function addSameProduct (product){
    const index = cart.findIndex(item => item.id === product.id)
    if (index !== -1) {
        product.quantity += 1;
    } else { 
        addToCart();
    }
    
}




