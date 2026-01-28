// i. product.js - Product catalog
// Product database (simulated)

//Given products Data
const products = [
{ id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
{ id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
{ id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
{ id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
{ id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
];

// TODO: Implement these functions

// Find and return product by ID
export function getProductById(id) {
    let productById=products.find(product => product.id===id);
    return productById;
}


// // Return all products
export function getAllProducts() {
    return products;
}

// // Filter products by category
export function getProductsByCategory(category) {
    let productsByCategory=products.filter(product => product.category===category);
    return productsByCategory;
}

// // Search products by name (case-insensitive)
export function searchProducts(query) {
    let productName=products.filter(product => product.name.toLowerCase() .includes(query.toLowerCase()));
    return productName.length? productName :"Product Not Found";
}

// // Check if product has enough stock
// // Return true/false
export function checkStock(productId, quantity) {
    let product=products.find(p => p.id===productId);
    if(!product) return false;
    return product.stock>=quantity;
}

// // Reduce product stock after purchase
export function reduceStock(productId, quantity) {
    let product=products.find(p => p.id===productId);
    if(!product){
        return "product not found";
    }
    if(product.stock <quantity){
        return "Insufficent Stock";
    }
     product.stock-=quantity;
     return product;
}