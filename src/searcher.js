//DEBE buscar los productos por los filtros



function filterProducts(filterButtons, products) {
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
}

export {filterProducts};