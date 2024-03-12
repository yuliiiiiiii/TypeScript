//define a function type that takes in two number type arguments and returns number type
type OperatorFunction = (num0: number, num1: number) => number


const add:OperatorFunction = (a, b) => {return a+b };
const subtract:OperatorFunction = (a, b) => {return a-b };
const multiple:OperatorFunction = (a, b) => {return a*b };
const divide:OperatorFunction = (a, b) => {return a/b};
// const wrongAdd = (a, b) => {return (a+b)+''};


//mathTutor funciton takes in a function as callback
function mathTutor(operationCallback: OperatorFunction) {
  console.log("Let's learn how to", operationCallback.name,'!');
  let value25 = operationCallback(2,5);
  console.log('When we', operationCallback.name, '2 and 5, we get', value25, '.');
  console.log('When we', operationCallback.name, value25, 'and 7, we get', operationCallback(value25,7), '.');
  console.log('Now fill out this worksheet.');
}

//call mathTutor function here
mathTutor(add)