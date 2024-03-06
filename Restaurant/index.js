"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const restaurants_1 = __importDefault(require("./restaurants"));
const dollarSigns = '$$';
const deliveryTimeMax = 90;
const maxDistance = 10;
let result;
const hour = new Date(2024, 2, 5, 20).getHours();
const priceBracket = dollarSigns.length;
const filteredRestaurants = restaurants_1.default.filter((restaurant) => {
    if (Number(restaurant.priceBracket) > priceBracket) {
        return false;
    }
    if (restaurant.deliveryTimeMinutes > deliveryTimeMax) {
        return false;
    }
    if (Number(restaurant.distance) > maxDistance) {
        return false;
    }
    if (hour < Number(restaurant.openHour) || hour > Number(restaurant.closeHour)) {
        return false;
    }
    return restaurant;
});
if (filteredRestaurants.length === 0) {
    result = 'There are no restaurants available right now.';
}
else {
    result = `We found ${filteredRestaurants.length} restaurants, the first is ${filteredRestaurants[0].name}.`;
}
console.log(result);
