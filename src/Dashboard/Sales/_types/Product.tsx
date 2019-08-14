export type ProductId = number | string

export interface ProductVariation {
  name?: string
  price?: number
  details?: object
}

export default interface Product {
  id?: ProductId
  name: string
  details?: object
  description: string
  variations: ProductVariation[]
  price: number
}
