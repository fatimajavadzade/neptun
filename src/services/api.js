import axios from "axios";
import addCount from "../utils/addCount";

const BASE_URL = "https://neptunbk.vercel.app";

async function getAllCategories() {
    const res = await axios.get(`${BASE_URL}/categories`);
    return res.data;
};

async function getAllProducts() {
    const res = await axios.get(`${BASE_URL}/products`);
    return addCount(res.data);
};

async function getProductsById(id) {
    const res = await axios.get(`${BASE_URL}/products/${id}`);
    return {...res.data,count:1};
};

async function getProdBySubId(id, limit, page) {
    const res = await axios.get(`${BASE_URL}/products/subcategory/${id}?limit=${limit}&page=${page}`)
    return addCount(res.data)
};

async function getProductByDiscount() {
    const res = await axios.get(`${BASE_URL}/products/discounted`);
    return addCount(res.data);
};

async function getProductsByPopular() {
    const res = await axios.get(`${BASE_URL}/products/populyar`);
    return addCount(res.data);
};

async function searchProducts(name) {
    const res = await axios.get(`${BASE_URL}/products/search?name=${name}`);
    return res.data;
};

async function login(user){
    const res = await axios.post(`${BASE_URL}/auth/login`,user);
    return res;
};

async function register(user){
    const res= await axios.post(`${BASE_URL}/auth/register`,user);
    return res;
}
export {
    getAllCategories,
    getProductsById,
    getAllProducts,
    getProductByDiscount,
    getProductsByPopular,
    getProdBySubId,
    searchProducts,
    login,
    register
};
