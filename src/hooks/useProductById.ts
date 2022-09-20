import { ProductType } from "../types/products"

export function useProductById (id: number, obj: []){
    const d = obj.filter((el: ProductType) => el.id === id)
    const data = d[0]
    return{
        name: data["name"],
        image: data["image"],
        description: data["description"],
        price: data["prices"],
        status: data["status"],
        onePrice: data["onePrice"]
    }
}