"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const siameseCat = {
    name: 'Proxie',
    run: () => 'pitter pat'
};
const bettaFish = {
    name: 'Neptune',
    swim: () => 'bubble blub'
};
function move(pet) {
    if ('run' in pet) {
        //can call specific method with type narrowing
        return pet.run();
    }
    if ('swim' in pet) {
        return pet.swim();
    }
}
console.log(move(siameseCat));
console.log(move(bettaFish));
