import { PriceBracket, orders, Order } from "./orders";
import { restaurants, Restuanrant } from "./restaurants";

const getMaxPrice = (priceRange: PriceBracket):number => {
  switch(priceRange) {
    case PriceBracket.Low:
      return 10.0;
    case PriceBracket.Medium:
      return 20.0;
    case PriceBracket.High:
      return 30.0;
    default:
      return 0
  }
}

const getOrders = (price: PriceBracket, orders: Order[][]): Order[][] => {
  let maxPrice:number = getMaxPrice(price)

  let filteredOrders: Order[][] = []

  orders.forEach(restaurant => {
    let filteredDish = restaurant.filter(dish => dish.price <= maxPrice)
    filteredOrders.push(filteredDish)
  })

  return filteredOrders
}

const printOrders = (restaurants: Restuanrant[], filteredOrders: Order[][]) :string => {
  let output:string = ""

  restaurants.forEach((res, index) => {
    if (filteredOrders[index].length > 0) {
      output += res.name + "\n";
      filteredOrders[index].forEach(dish => {
        output += "- " + dish.name + ": $" + dish.price + "\n"
      })
    }
  })

  return output
}

const eligibleOrders = getOrders(PriceBracket.Low, orders);
console.log(printOrders(restaurants, eligibleOrders));