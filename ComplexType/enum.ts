enum Pet {
  Hamster,
  Rat,
  Chinchilla,
  Tarantula
}

let petOnSale :Pet = Pet.Hamster
let ordersArray:[Pet, number][] = [
  [Pet.Rat, 2],
  [Pet.Chinchilla, 1],
  [Pet.Hamster, 3]
]
//ordersArray is an Array of tuple, with type Pet and number

// ordersArray.push([Pet.Rabbit, 2]);
//Property 'Rabbit' does not exist on type 'typeof Pet'.