import axios from "axios";

const client = axios.create({
    baseURL:"http://localhost:8001"
})

export async function getProducts(){
const {data} = await client("/products")

return data;
}

export async function getProduct(id){
    const {data} = await client(`/products/${id}`)

    return data
}

export async function getProducts2(){
    const {data} = await client("/products2")
    
    return data;
    }
    
    export async function getProduct2(id){
        const {data} = await client(`/products2/${id}`)
    
        return data
    }