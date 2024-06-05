//DEBE imprimir en pantalla la información de filtros.

import { filters, products } from "../assets/data/data.js";

let filterContainer = document.querySelector(".filters-container");

for (let index = 0; index < filters.length; index++) {
  const btn = document.createElement("button");
  btn.classList.add("filter");
  btn.innerHTML = filters[index];

  filterContainer.appendChild(btn);
}

// Obtén una referencia a los botones filtradores
const filterButtons = document.querySelectorAll(".filter");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.innerHTML.toLowerCase();
    if (category === "todos") {
        console.log(products);
    }else{
        const filteredProducts = products.filter(
          (product) => product.category === category
        );
        console.log(filteredProducts);
    }
  });
});



//DEBE imprimir en pantalla los productos, con su Título, descripción y precio en € y botón de añadir.

