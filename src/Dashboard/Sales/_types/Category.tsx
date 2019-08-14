export type CategoryId = number | string

export default interface Category {
  id?: CategoryId
  name: string
  description: string
}
