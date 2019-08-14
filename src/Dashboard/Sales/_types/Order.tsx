import { PaymentId } from './Payment'
import { ProductId } from './Product'

export type OrderId = number | string
export type OrderStatus =
  | 'received'
  | 'preparing'
  | 'shipped'
  | 'delivered'
  | 'rejected'
  | 'refunded'

export interface OrderSubmissionData {
  products?: any[]
  customerNotes?: string
}

export default interface Order {
  id?: OrderId
  name?: string
  status: OrderStatus
  customerNotes?: string
  staffNotes?: string
  paymentId?: PaymentId
  products?: any[]
}
