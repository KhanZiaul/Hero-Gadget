function setCartIdInLocal(id) {
    let shoppingCart = getCart()

    const quantity = shoppingCart[id];

    if (!quantity) {

        shoppingCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }


    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

function getCart() {
    let shoppingCart = {};
    const existCart = localStorage.getItem('shopping-cart');
    if (existCart) {
        shoppingCart = JSON.parse(existCart)
    }
    return shoppingCart;
}
export { setCartIdInLocal, getCart }