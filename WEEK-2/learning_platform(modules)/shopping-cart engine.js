import {courses} from './course-catalog-engine.js'
// MODULE 3: SHOPPING CART ENGINE 
//   -> Merge cart with courses to get full course info
//   -> Calculate total cart amount
//   -> Increase quantity of a course (immutably)
//   -> Remove a course from cart
//   -> Check if all cart items are paid courses


//given data
const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];

//1.Merge cart with courses to get full course info
    let mergedCart=cart.map(item =>{
        const course=courses.find(c => c.id===item.courseId);
        return {
            ...course,
            qty:item.qty
        }
    });
    console.log(mergedCart)

//2.Calculate total cart amount
    let totalCartamount=mergedCart.reduce((acc,item) =>{
        return acc+item.price*item.qty
    },0)
    console.log("Total cart Amount:",totalCartamount); 
//3.Increase quantity of a course (immutably)
let increasedQuantity=(cart,id)=>{
    return cart.map(item =>{
        if(item.courseId===id){
            return {...item,qty:item.qty+1}
        };
            return item;
        });
    }
    console.log(increasedQuantity(cart,103))
//4.Remove a course from cart
    let removedFromCart=(cart,id) =>{
        return cart.filter(item => item.courseId!==id);
    }
    let updatedCart=removedFromCart(cart,103)
    console.log(updatedCart)
// 5.Check if all cart items are paid courses
    const allPaidCourses = cart.every(item => {
        const course = courses.find(c => c.id === item.courseId);
            return   course.price > 0;
    });
    console.log("All are paid courses:",allPaidCourses);