export type CustomerId = number | string

export default interface Customer {
  id?: CustomerId
  name?: string
  email?: string
  details?: object
}
