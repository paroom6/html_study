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
 * 
 * 이클립스 폴더 생성 -> 필터 -> 서블릿 insert ->  
 * 
 * */
async function handleAddClick() {
    const productInputs = document.querySelectorAll(".product-input");
    let productObj = {
        product_name : productInputs[0].value,
        product_price : parseInt(productInputs[1].value),
        product_size : productInputs[2].value
    };
    try {   
        const response = await fetch("http://localhost:8080/Product/product/addition", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productObj) 
        });
        if(!response.ok) {
            throw await response.json();
        }
        const responseData = await response.json();
        console.log(responseData);
        alert(`${responseData.data.succesCount0}건의 상품 추가 완료`);
        handleSearchClick();
    } catch (error) {
        console.log("에러발생");
        alert(error?.errorMasseage);
        //?. null이나 undifined일 경우 참조하지 않는다.
    }
}