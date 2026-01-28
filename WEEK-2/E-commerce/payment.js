// payment.js - Payment processing
import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

// TODO: Implement these functions

export function processPayment(paymentMethod, couponCode = null) {
    // 1. Get cart items and total
    let cartItems=getCartItems();
    if(cartItems.length === 0){
        return{
            status:"failed",
            message:"Cart is Empty"
        }
    }
    let subtotal=getCartTotal();
    // 2. Apply discount if coupon provided
    let discount=0;
    let total=subtotal;
    if(couponCode){
        let discountResult=applyDiscount(subtotal,couponCode,cartItems);
        discount=discountResult.discount;
        total=discountResult.finalTotal;
    }

    // 3. Validate payment method (card/upi/cod)
    let validPaymentMethods=['card','upi','cod'];
    if(!validPaymentMethods.includes(paymentMethod)){
        return{
            status:"Failed",
            message:"Invalid payment method"
        };
    }
    // 4. Process payment (simulate)
    let paymentSuccess=true;
    if(!paymentSuccess){
        return {
            status:"failed",
            message:"Payment Failed"
        }
    }
    
    // 5. Reduce stock for all items
     cartItems.forEach(item => {
        reduceStock(item.productId, item.quantity);
    });
    // 6. Clear cart
    clearCart();
    // 7. Generate order summary

    // Return order summary:
    // {
    //   orderId: ...,
    //   items: [...],
    //   subtotal: ...,
    //   discount: ...,
    //   total: ...,
    //   paymentMethod: ...,
    //   status: 'success/failed',
    //   message: '...'
    // }
      return {
        orderId: "ORD" + Date.now(),
        items: cartItems,
        subtotal,
        discount,
        total,
        paymentMethod,
        status: "success",
        message: "Order placed successfully"
    };
}

export function validatePaymentMethod(method) {
    // Check if method is valid (card/upi/cod)
    return ['card', 'upi', 'cod'].includes(method);
}

function generateOrderId() {
    // Generate random order ID
    return 'ORD' + Date.now();
}