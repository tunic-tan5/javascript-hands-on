// iii. discount.js - Coupon and discount logic
// Available coupons

//given data
    const coupons = {
    'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
    'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
    'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
    };

// TODO: Implement these functions

export function validateCoupon(couponCode, cartTotal, cartItems) {
    // 1. Check if coupon exists
    let couponExists=coupons[couponCode];
    if(!couponExists){
        return{
            valid:false,
            message:"Invalid coupon Code"
        }
    }
    // 2. Check minimum amount requirement
    if(cartTotal < couponExists.minAmount){
        return{
            valid:false,
            message:`Min cart amount should be ${couponExists.minAmount}`
        };
    }
    // 3. Check category requirement (if any)
    if (couponExists.category) {
        let validCategory = cartItems.some(item => item.category === coupon.category);
    if (!validCategory) {
      return {
        valid: false,
        message: `Coupon applicable only for ${coupon.category} items`
      };
    }
    }
    return{
        valid:true,
        message:"Coupon applied successfully"
    }
} 

export function calculateDiscount(couponCode, cartTotal) {
    // Calculate discount amount based on coupon type
    let coupon=coupons[couponCode];
    if(!coupon) return 0;
    let discount=0;
    if (coupon.type === 'percentage') {
        discount=(cartTotal * coupon.value) / 100;
    }else if (coupon.type === 'flat') {
        discount= coupon.value;
    };
    return Math.min(discount,cartTotal);//because if cartTotal is 300 and couponcode is FLAT then removing 500 from 300 goes negative value ;
}

export function applyDiscount(cartTotal, couponCode, cartItems) {
    // 1. Validate coupon
    let validate=validateCoupon(couponCode,cartTotal,cartItems);
    if(!validate.valid){
      return{
        originalTotal:cartTotal,
        discount:0,
        finalTotal:cartTotal,
        message:validate.message
    }
    }
    // 2. If valid, calculate discount
    let discount=calculateDiscount(couponCode,cartTotal);
    let finalTotal=Math.max(cartTotal-discount,0);
    // 3. Return final amount and discount details
    return{
        originalTotal:cartTotal,
        discount,
        finalTotal,
        message:"Discount applied successfully"
    }
}