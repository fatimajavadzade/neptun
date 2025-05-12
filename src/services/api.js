import addCount from "../utils/addCount";
import axiosInstance from "./axiosInstance";


const cache={}
async function getAllCategories() {
    const res = await axiosInstance.get(`/categories`);
    return res.data;
};

async function getAllProducts() {
    const res = await axiosInstance.get(`/products`);
    return addCount(res.data);
};

async function getProductsById(id) {
    const res = await axiosInstance.get(`/products/${id}`);
    return {...res.data,count:1};
};

async function getProdBySubId(id, limit, page) {
    const res = await axiosInstance.get(`/products/subcategory/${id}?limit=${limit}&page=${page}`)
    return addCount(res.data)
};

async function getProductByDiscount() {
    const res = await axiosInstance.get(`/products/discounted`);
    return addCount(res.data);
};

async function getProductsByPopular() {
    const res = await axiosInstance.get(`/products/populyar`);
    return addCount(res.data);
};

async function searchProducts(name) {
    const res = await axiosInstance.get(`/products/search?name=${name}`);
    return res.data;
};

async function login(user){
    const res = await axiosInstance.post(`/auth/login`,user);
    return res;
};

async function register(user){
    const res= await axiosInstance.post(`/auth/register`,user);
    return res;
}

async function verifyToken(){
    const res= await axiosInstance.get(`/auth/verify-token`);
    return res.data;
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
    register,
    verifyToken
};
