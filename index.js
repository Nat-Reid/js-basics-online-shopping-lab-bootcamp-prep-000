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
  if (cart.length === 0){
    return 'Your shopping cart is empty.';
  }
  else{
    var message = "In your cart, you have ";
    for (let i=0; i<cart.length-1; i++){
      var item = cart[i];
      message += `${item.itemName} at $${item.itemPrice}, `;
    }
    item = cart.slice(-1)[0];//last item
    message += `and ${item.itemName} at $${item.itemPrice}.`;
    return message;
  }
}

function total() {
  var total = 0;
  for (let i=0; i<cart.size; i++){
    total += cart[i].itemPrice;
  }
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
