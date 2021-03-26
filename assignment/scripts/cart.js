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
//function should add the item that I call below to the basket array. If I add it the console should return true. If I don't add an item it should return false.

console.log('added item? no item expect false' , addItem());
console.log(`Basket is ${basket}`);
console.log('added item? Adding bananas (expect true)', addItem('bananas'));
console.log(`Basket is now ${basket}`);
console.log('added item? Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);

function listItems() {
  for (let i = 0; i<basket.length; i++ ){
  console.log(basket[i]);
  }
}
//function should loop through the items(values) in the basket array and console.log(list out in console) each item on a seperate line when function is ran. It should return undefined.
console.log('this is the current value of "basket": ', basket);
console.log('this is what happens when listItems() runs:')
listItems();
console.log('the value that listItems() returns:', listItems())
console.log('items bananas and apples should be listed on seperate lines:')
listItems();


function empty(){
  while (basket.length > 0) {
    basket.pop();
  }
  return basket
}
//function should empty the basket array so there are no longer any items in the array. It should return what is currently in the basket array when function is called.
console.log('basket should be empty:' , empty());
console.log('adding item tomato. expect true for add:' , addItem('tomato'));
console.log('list should now be tomato:' , listItems());
console.log('emptying cart, array should be empty:' , empty());
