const imageWidth = 20;
const imageHeight = 8;

const creatImageData = (x=imageWidth, y=imageHeight):boolean[] => {
   let length = x * y;
   return new Array(length).fill(false)
}
const imageData = creatImageData()

const drawDot = (x:number,y:number):void => {
  if(isPoitInImage(x, y)) {
    let index = y * imageWidth + x;
    imageData[index] = true;
  }
}

const drawHorizontalLine = (x:number, y:number, length:number) => {
  for (let i=x; i<x+length; i++) {
    drawDot(i, y)
  }
}

const drawVerticalLine = (x:number, y:number, height:number) => {
  for (let i=y; i<y+height; i++) {
    drawDot(x, i)
  }
};



const isPoitInImage = (x:number, y:number) :boolean => {
  if(x>=0 && x<imageWidth && y>=0 && y<imageHeight) {
    return true
  } else {
    return false
  }
}