
const menu1 = {
    path: "/test/menu",
    params: {
        page: 1,
        searchValue: "테스트"
    }
}

const result = "/test/menu?page=1&searchValue=테스트";

const result2 = menu1.path + "?" 
console.log(result2);
const keys = Object.keys(menu1.params);
const values = Object.values(menu1.params);
const entries = Object.entries(menu1.params);
console.log(keys.map(key => menu1.params[key]));
console.log(values.map(key => key));
console.log(entries);
console.log(entries.map((key, value) => key + "=" + value));
const names = ["조성민","조성이","조성삼"];
const names2 = names.join("&");
console.log(names2);
