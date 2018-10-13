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
   if (cart.contains(item)){
     return "${item.itemName} has been added to your cart.";
   }
   else{
     return "Error in adding item to cart";
   }
}

function viewCart() {
  var message = "In your cart, you have ";
  for (let i=0; i<cart.length-1; i++){
    let item = cart[i];
    message += "${item.itemName} at $${item.itemPrice}, ";
  }
  item = cart.slice(-1)[0];
  message += "and ${item.itemName} at $${item.itemPrice}."
  return message;
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
