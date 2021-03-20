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
