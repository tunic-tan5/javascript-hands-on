/*Hands-On 2: Deep Copy (Isolation & Safety Use Case)
---------------------------------------------------

🧪 Given Data:
                const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };

🎯 Task:
      1. Create a deep copy of order
      2. Modify in copied object:
            i. customer.address.city
            ii. items[0].price
            iii. Verify original object remains unchanged*/
const order = {
    orderId: "ORD1001",
    customer: {   
      name: "Anita",
      address: {
        city: "Hyderabad",
        pincode: 500085
      }
    },
    items: [
      { product: "Laptop", price: 70000 }
    ]
  };
  // Creating a deep copy of the order object
  const deepCopiedOrder = JSON.parse(JSON.stringify(order));    
  // Modifying the deep copied object
  deepCopiedOrder.customer.address.city = "Bangalore";  
  deepCopiedOrder.items[0].price = 65000;
  // Verifying the original object remains unchanged
  console.log("Original Order:", order);  
  console.log("Modified Deep Copied Order:", deepCopiedOrder);


  