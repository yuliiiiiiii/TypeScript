/**
 * Logs the salad ingredients
 * @param fruit1 - The first input string
 * @param fruit2 - The second input string
 * @returns - Nothing
 */
function makeFruitSalad(fruit1, fruit2) {
    var salad = fruit1 + fruit2 + fruit2 + fruit1 + fruit2 + fruit1 + fruit1;
    console.log(salad);
}
makeFruitSalad('apple', 'banana');
/**
 * Logs status the repeat times
 * @param status - The first input default 'not ready...'
 * @param repeat - The second input defaul 1
 * @returns - Nothing
 */
function proclaim(status, repeat) {
    if (status === void 0) { status = 'not ready...'; }
    if (repeat === void 0) { repeat = 1; }
    for (var i = 0; i < repeat; i += 1) {
        console.log("I'm ".concat(status));
    }
}
proclaim();
proclaim('ready!', 3);
proclaim(undefined, 2);
