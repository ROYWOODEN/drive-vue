export interface BodyPrice {
  price_start_local: number
  distance_in_meters: number
  duration_in_seconds: number
  pickup_in_meters: number
  pickup_in_seconds: number
  driver_rating: number
}

export interface Price {
  price: number
  probability: number
}
