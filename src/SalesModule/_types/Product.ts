import Entity, { EntityId } from '_types/Entity'
import { UserId } from '_types/User'
import { OrganizationId } from '_types/Organization'
import ProductImage from './ProductImage'

export type ProductId = EntityId

export interface ProductVariation {
  name?: string
  price?: number
  details?: object
}

export default interface Product extends Entity {
  id?: ProductId
  name: string
  details?: object
  description?: string
  variations?: ProductVariation[]
  price: number
  priceDiscounted?: number
  images?: ProductImage[]
  ownerUserId?: UserId
  ownerOrganizationId?: OrganizationId
}
