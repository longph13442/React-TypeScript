import { TypeProducts } from "../type/typeProducts";
import instance from "./instance";

export const getAll = () =>{
    const url = `/products`
    return instance.get(url)
}
export const add = (products: TypeProducts) =>{
    const url = `/products`
    return instance.post(url, products)
}