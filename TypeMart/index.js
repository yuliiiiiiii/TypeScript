"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var products_1 = require("./products");
var productName = 'tote bag';
var shipping;
var taxPercent;
var taxTotal;
var total;
var shippingAddress = '1210 Boul de Maisonnueve O, Montreal';
var product = products_1.default.filter(function (pro) {
    if (pro.name === productName) {
        return pro;
    }
})[0];
// console.log(product)
if (product.preOrder === 'true') {
    console.log("We'll send you a message when it's on the way");
}
if (Number(product.price) >= 25) {
    shipping = 0;
    console.log('We provide free shipping for this product');
}
else {
    shipping = 5;
}
if (shippingAddress.match('New York')) {
    taxPercent = 0.1;
}
else {
    taxPercent = 0.05;
}
//  console.log('taxPercent: ', taxPercent)
taxTotal = Number(product.price) * taxPercent;
total = taxTotal + Number(product.price) + shipping;
// console.log('total: ', total)
console.log('Product name: ', product.name, 'Shipping address: ', shippingAddress, 'Price of the product: ', product.price, 'Tax total: ', taxTotal, 'Shipping: ', shipping, 'Total amount: ', total);
