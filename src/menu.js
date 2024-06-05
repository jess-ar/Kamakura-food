//DEBE imprimir en pantalla la información de filtros.

import { filters, products } from "../assets/data/data.js";
import { filterProducts } from "./searcher.js";

let filterContainer = document.querySelector(".filters-container");

for (let index = 0; index < filters.length; index++) {
  const btn = document.createElement("button");
  btn.classList.add("filter");
  btn.innerHTML = filters[index];

  filterContainer.appendChild(btn);
}

// Obtén una referencia a los botones filtradores
const filterButtons = document.querySelectorAll(".filter");

filterProducts(filterButtons, products);


//DEBE imprimir en pantalla los productos, con su Título, descripción y precio en € y botón de añadir.

