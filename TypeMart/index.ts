import products from './products';

const productName :string = 'hoodie';

let shipping :number
let taxPercent :number
let taxTotal :number
let total :number
const shippingAddress :string = '1210 Boul de Maisonnueve O, Montreal'

let product = products.filter(pro => {
  if (pro.name === productName) {
    return pro
  }
})[0]

console.log(product)

if (product.preOrder === 'true') {
  console.log("We'll send you a message when it's on the way")
}
if(Number(product.price) >= 25) {
  shipping = 0;
  console.log('We provide free shipping for this product')
} else {
  shipping = 5;
}

if (shippingAddress.match('New York')) {
  taxPercent = 0.1
} else {
  taxPercent = 0.5
}
console.log('taxPercent: ', taxPercent)