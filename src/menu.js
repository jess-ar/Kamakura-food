import { products } from "../assets/data/data.js";
//DEBE imprimir en pantalla la información de filtros.

//DEBE imprimir en pantalla los productos, con su Título, descripción y precio en € y botón de añadir.

function displayMenu(products) {
    const productsContainer = document.querySelector('#products');
    products.forEach(product => {
        const productContainer = document.createElement('div');
        productContainer.classList.add('product-container');
        productContainer.innerHTML = `
                        <h3>${product.name}</h3>
                        <p>${product.description}</p>
                        <div class="price-container">
                            <h5>${product.price} €</h5>
                            <button class="add-button" id=${product.id}>Añadir</button>
                        </div>
                        `

        productsContainer.appendChild(productContainer);
    })

}
displayMenu(products)










