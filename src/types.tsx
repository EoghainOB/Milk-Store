export interface productTypes {
    id: string
    name: string
    type: string
    storage: number
}

export interface cartTypes {
    _id: string
    name: string
    type: string
    qty: number
}

export type ProductContextType = {
    products: productTypes[]
    cart: cartTypes[]
    types: string[]
}
