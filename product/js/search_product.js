
// window.addEventListener('DOMContentLoaded', () => {
//     handleSearchClick();
//   });
async function handleSearchClick() {
    try {   
        const response = await fetch("http://localhost:8080/Product/product/list");
                                     
        console.log(responseData);
        const tbody = document.querySelector(".product-body");
        tbody.innerHTML = "";
        for (const product of responseData) {
            tbody.innerHTML += productInfoTr(product);
        }
    } catch (error) {
        console.log(error);
    }
                                   
}

function productInfoTr({product_id, product_name, product_price, product_size}) {
    return `
        <tr>
            <td>${product_id}</td>
            <td>${product_name}</td>
            <td>${product_price}</td>
            <td>${product_size}</td>
        </tr>
    `
}