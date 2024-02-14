/**
 * servlet 프로젝트명 product
 * GroupId com.study
 * artifact-Id product
 * name product
 * jdk 11
 * dependencies 
 * 1.lombok
 * 2.jsp
 * 3.Gson
 * 4.mySQL
 * 
 * package
 * com.study.product
 *  config -DBConfig
 *  dao    -ProductDao
 *  entity -Product
 *  filter -CommonFilter
 *  servlet 
 *          - InsertProductServlet(/product)
 *          - SelectProductServlet(/product)
 * DB(db_study)
 * table(product_tb)
 * id,name,price,size(ss,s,m,l,xl,xxl)
 * 
 * CRDU
 * */
async function handleAddClick() {
    try {   
        const productInputs = document.querySelectorAll(".product-input");
        let productObj = {
            product_name : productInputs[0].value,
            product_price : productInputs[1].value,
            product_size : productInputs[2].value
        };
        const product = await fetch("http://localhost:8080/Product/product/addition", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productObj) 
        });
        if(!product.ok) {
            throw await product.json();
        }
        handleSearchClick();
    } catch (error) {
        console.log("에러발생");
        console.log(error.errorMasseage);
    }
}