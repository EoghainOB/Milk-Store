export interface productTypes {
    id: string
    name: string
    type: string
    storage: number
}

export interface cartTypes {
    id: string
    name: string
    qty: number
}

export type ProductContextType = {
    products: productTypes[]
    cart: cartTypes[]
    types: string[]
}
