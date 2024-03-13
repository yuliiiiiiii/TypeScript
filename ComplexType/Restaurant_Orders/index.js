"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orders_1 = require("./orders");
const restaurants_1 = require("./restaurants");
const getMaxPrice = (priceRange) => {
    switch (priceRange) {
        case orders_1.PriceBracket.Low:
            return 10.0;
        case orders_1.PriceBracket.Medium:
            return 20.0;
        case orders_1.PriceBracket.High:
            return 30.0;
        default:
            return 0;
    }
};
const getOrders = (price, orders) => {
    let maxPrice = getMaxPrice(price);
    let filteredOrders = [];
    orders.forEach(restaurant => {
        let filteredDish = restaurant.filter(dish => dish.price <= maxPrice);
        filteredOrders.push(filteredDish);
    });
    return filteredOrders;
};
const printOrders = (restaurants, filteredOrders) => {
    let output = "";
    restaurants.forEach((res, index) => {
        if (filteredOrders[index].length > 0) {
            output += res.name + "\n";
            filteredOrders[index].forEach(dish => {
                output += "- " + dish.name + ": $" + dish.price + "\n";
            });
        }
    });
    return output;
};
const eligibleOrders = getOrders(orders_1.PriceBracket.Low, orders_1.orders);
console.log(printOrders(restaurants_1.restaurants, eligibleOrders));
