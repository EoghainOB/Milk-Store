export interface productTypes {
    id: string,
    name: string,
    type: string,
    storage: number,
}

export interface cartTypes {
    name: string,
    id: number,
    price: number,
    qty: number,
}

export type ProductContextType = {
    products: productTypes[]
    cart: cartTypes[]
    types: string[]
}
