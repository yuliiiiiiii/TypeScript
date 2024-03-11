"use strict";
var Pet;
(function (Pet) {
    Pet[Pet["Hamster"] = 0] = "Hamster";
    Pet[Pet["Rat"] = 1] = "Rat";
    Pet[Pet["Chinchilla"] = 2] = "Chinchilla";
    Pet[Pet["Tarantula"] = 3] = "Tarantula";
})(Pet || (Pet = {}));
let petOnSale = Pet.Hamster;
console.log(petOnSale);
//0
let ordersArray = [
    [Pet.Rat, 2],
    [Pet.Chinchilla, 1],
    [Pet.Hamster, 3]
];
//ordersArray is an Array of tuple, with type Pet and number
// ordersArray.push([Pet.Rabbit, 2]);
//Property 'Rabbit' does not exist on type 'typeof Pet'.
