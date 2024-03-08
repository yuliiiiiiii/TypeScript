"use strict";
const imageWidth = 20;
const imageHeight = 8;
const creatImageData = (x = imageWidth, y = imageHeight) => {
    let length = x * y;
    return new Array(length).fill(false);
};
const imageData = creatImageData();
const isPoitInImage = (x, y) => {
    if (x >= 0 && x < imageWidth && y >= 0 && y < imageHeight) {
        return true;
    }
    else {
        return false;
    }
};
const drawDot = (x, y) => {
    if (isPoitInImage(x, y)) {
        let index = y * imageWidth + x;
        imageData[index] = true;
    }
};
const drawHorizontalLine = (x, y, length) => {
    for (let i = x; i < x + length; i++) {
        drawDot(i, y);
    }
};
const drawVerticalLine = (x, y, height) => {
    for (let i = y; i < y + height; i++) {
        drawDot(x, i);
    }
};
function drawRectangle(x, y, length, height) {
    // top
    drawHorizontalLine(x, y, length);
    // bottom
    drawHorizontalLine(x, y + height - 1, length);
    // left
    drawVerticalLine(x, y, height);
    // right
    drawVerticalLine(x + length - 1, y, height);
}
// draw head
drawRectangle(0, 0, 20, 8);
// eyes
drawDot(7, 2);
drawDot(12, 2);
// smile
drawDot(4, 4);
drawHorizontalLine(4, 5, 12);
drawDot(15, 4);
const outputImage = (onChar = "X", offChar = " ") => {
    let text = "";
    for (let i = 0; i < imageData.length; i++) {
        if (i > 0 && i % imageWidth === 0) {
            text += "\n";
        }
        imageData[i] ? text += onChar : text += offChar;
    }
    return text;
};
console.log(outputImage());
