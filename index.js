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
    for (let i=0; i<cart.length; i++){
      var item = cart[i];
      if (i === cart.length -1){
        if (cart.length === 1){
          message += `${item.itemName} at $${item.itemPrice}.`
        }else{
          message += `and ${item.itemName} at $${item.itemPrice}.`
        }
      }else{
        message += `${item.itemName} at $${item.itemPrice}, `;
      }
    }
    return message;
  }
}

function total() {
  var total = 0;
  for (let i=0; i<cart.length; i++){
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  for (let i=0; i<cart.length; i++){
    if (cart[i].itemPrice === item){
      cart.splice(i);
      return cart;
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  // write your code here
}
