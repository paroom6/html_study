
// window.addEventListener('DOMContentLoaded', () => {
//     handleSearchClick();
//   });
async function handleSearchClick() {
    try {   
        const JsonProducts = await fetch("http://localhost:8080/Product/product/list");
        if(!JsonProducts.ok) {
           throw await JsonProducts.json();
        }
        const Products = await JsonProducts.json();
        console.log(Products);
        const tbody = document.querySelector(".product-body");
        tbody.innerHTML = "";
        for (const product of Products.data) {
            tbody.innerHTML  += `
                <tr>
                    <td>${product.product_id}</td>
                    <td>${product.product_name}</td>
                    <td>${product.product_price}</td>
                    <td>${product.product_size}</td>
                </tr>
            `
        }
    } catch (error) {
        console.log(error);
    }

}