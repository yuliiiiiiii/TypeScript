"use strict";
const imageWidth = 20;
const imageHeight = 8;
const creatImageData = (x = imageWidth, y = imageHeight) => {
    let length = x * y;
    return new Array(length).fill(false);
};
const imageData = creatImageData();
