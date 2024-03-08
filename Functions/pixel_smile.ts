const imageWidth = 20;
const imageHeight = 8;

const creatImageData = (x=imageWidth, y=imageHeight):boolean[] => {
   let length = x * y;
   return new Array(length).fill(false)
}

const imageData = creatImageData()

const drawDot = (x:number,y:number):void => {
  
}

const isPoitInImage = (x:number, y:number) :boolean => {
  if(x>=0 && x<imageWidth && y>=0 && y<imageHeight) {
    return true
  } else {
    return false
  }
}