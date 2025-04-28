function addCount(data){
    const products=data.products.map(item=>({...item,count:1}))
    return {...data,products}
}
export default addCount;