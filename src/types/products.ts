export interface ProductsStore {
    products: ProductType[];
    page: number
}

export type ProductType =  {
    id: number;
    image: string[] ;
    name: string;
    description: string;
    prices: PriceType[];
    status: string;
    onePrice: boolean
}

export type PriceType = {
    id: number;
    city: string;
    price: number;
}
