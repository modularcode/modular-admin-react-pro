export type LocationId = number | string

export default interface Location {
  id?: LocationId
  location?: {
    lat: number
    lng: number
  }
  name: string
}
