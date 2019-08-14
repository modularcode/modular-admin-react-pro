export type PaymentId = number | string

export default interface Payment {
  id?: PaymentId
  status?: string
  transactionId?: string
  transactionStatus?: string
}
