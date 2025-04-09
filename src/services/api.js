import axios from "axios";

const BASE_URL = "https://neptunbk.vercel.app"

async function getAllCategories() {
    const res = await axios.get(`${BASE_URL}/categories`)
    return res.data
}

async function getAllProducts() {
    const res = await axios.get(`${BASE_URL}/products`)
    return res.data
}

async function getProductsById(id) {
    const res = await axios.get(`${BASE_URL}/products/${id}`)
    return res.data
}

async function getProdBySubId(id, limit, page) {
    const res = await axios.get(`${BASE_URL}/products/subcategory/${id}?limit=${limit}&page=${page}`)
    return res.data
}

async function getProductByDiscount() {
    const res = await axios.get(`${BASE_URL}/products/discounted`)
    return res.data
}

async function getProductsByPopular() {
    const res = await axios.get(`${BASE_URL}/products/populyar`)
    return res.data
}

export {
    getAllCategories,
    getProductsById,
    getAllProducts,
    getProductByDiscount,
    getProductsByPopular,
    getProdBySubId
}
