// ii. cart.js - Shopping cart operations
import { getProductById, checkStock } from './product.js';

let cartItems = [];

// TODO: Implement these functions

export function addToCart(productId, quantity) {
    // 1. Get product details
    let productDetails=getProductById(productId);
    if(!productDetails) return "Product Not Found";

    // 2. Check stock availability
    let stockAvailability=checkStock(productId,quantity);
    if(!stockAvailability) return "Insufficent Stock";


    // 3. Check if product already in cart
    //    - If yes, update quantity
    //    - If no, add new item
    let item=cartItems.find(p => p.productId===productId);
    if(item)//item already exists increase quantity
    {
        item.quantity+=quantity;
    }else{
        //add product to the cartItems
        cartItems.push({productId,quantity});
    }

    // 4. Return success/error message
    return "Product added to Cart successfully";
}

// Remove product from cart
export function removeFromCart(productId) {
    let productIndex=cartItems.findIndex(p => p.productId===productId);
    if(productIndex === -1) return " product does not exist in Cart";
    cartItems.splice(productIndex,1);
    return "product is Deleted Successfully";
     
}

export function updateQuantity(productId, newQuantity) {
    // Update quantity of product in cart
    // Check stock before updating
    let product=cartItems.find(p => p.productId===productId);
    if(!product) return "Product not found in Cart";
    let stock=checkStock(productId,newQuantity);
    if(!stock) return "Insufficient Stock";
    product.quantity=newQuantity;
    return ` product with id ${product.productId} is Updated with new Quantity ${product.quantity}`
}

export function getCartItems() {
    // Return all cart items with product details
    return cartItems.map(item =>{
        let product=getProductById(item.productId);
        return{
            ...product,
            quantity:item.quantity
        };
    });
}

export function getCartTotal() {
    // Calculate total price of all items in cart
    // Return total
    return cartItems.reduce((acc,item)=>{
        let product=getProductById(item.productId);
        return acc+product.price *item.quantity;
    },0);
}

export function clearCart() {
    // Empty the cart
    cartItems=[];
    return "Cart cleared successfully";
}