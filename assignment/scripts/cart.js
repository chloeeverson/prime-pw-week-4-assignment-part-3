console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = []
function addItem( item ) {
  if (item) {
    basket.push(item);
    return true;
  } else {
    return false;
  }
}
console.log('added item? no item expect false' , addItem());
console.log(`Basket is ${basket}`);
console.log('added item? Adding bananas (expect true)', addItem('bananas'));
console.log(`Basket is now ${basket}`);
console.log('added item? Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);

// function listItems() {
//   for (let i = 0; i<basket.length; i++ ){
//   console.log(basket[i]);
//   }
// }
//
// console.log('items banana and apples should be listed on seperate lines:' , listItems());

// function listItems() {
//   for (let i = 0; i<basket.length; i++ ){
//   return basket[i]
//   }
// }
//
// console.log('items banana and apples should be listed on seperate lines:' , listItems());

// function listItems() {
//   for (item of basket) {
//     console.log(item);
//   }
// }
// console.log('items banana and apples should be listed on seperate lines:' , listItems());

// function listItems() {
//   for (item of basket) {
//     console.log(item);
//     return item;
//   }
// }
// console.log('items banana and apples should be listed on seperate lines:' , listItems());

// function listItems() {
//   for (item of basket) {
//     let answer = console.log(item);
//     return answer
//   }
// }
// console.log('items banana and apples should be listed on seperate lines:' , listItems());

function listItems() {
  for (item of basket) {
    return item
  }
}
console.log('items banana and apples should be listed on seperate lines:' , listItems());

function empty(){
  while (basket.length > 0) {
    basket.pop();
  }
  return basket
}

console.log('basket should be empty:' , empty());
console.log('adding item tomato. expect true for add:' , addItem('tomato'));
console.log('list should now be tomato:' , listItems());
console.log('emptying cart, array should be empty:' , empty());
