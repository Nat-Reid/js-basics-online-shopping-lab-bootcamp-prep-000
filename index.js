var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var item = {itemName : item, itemPrice: Math.floor(Math.random()*100)};
  cart.push(item);
  return `${item.itemName} has been added to your cart.`;
}

function viewCart() {
  var message = "In your cart, you have ";
  for (let i=0; i<cart.length-1; i++){
    let item = cart[i];
    message += "${item.itemName} at $${item.itemPrice}, ";
  }
  item = cart.slice(-1)[0];//last item
  message += "and ${item.itemName} at $${item.itemPrice}.";
  return message;
}

function total() {
  var total = 0;
  //for i in cart{
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
