import exp from 'express';
//create mini express(seperate route) app
export const productApp=exp.Router();
let products = []
 
// GET all products 
productApp.get('/products', (req, res) => {
    res.status(200).json({
        message: "all products",
        payload: products
    })
}) 
// GET product by id 
productApp.get('/products-id/:id', (req, res) => {
    const productId = Number(req.params.id)

    const productObj = products.find(
        product => product.productId === productId
    )

    if (!productObj) {
        return res.status(404).json({ message: "product not found" })
    }

    res.status(200).json({
        message: "product found",
        payload: productObj
    })
})
//get product by brand
productApp.get('/products/brand/:brandName', (req, res) => {
    const brandName = req.params.brandName.toLowerCase()
    const filteredProducts = products.filter(
        product => product.brand.toLowerCase() === brandName
    )
    res.status(200).json({
        message: "products found for the brand",
        payload: filteredProducts
    })
})
 
// POST create product 
productApp.post('/products', (req, res) => {
    const newProduct = req.body
    products.push(newProduct)

    res.status(201).json({
        message: "new product created",
        payload: newProduct
    })
})
 
// PUT update product 
productApp.put('/products', (req, res) => {
    const modifiedProduct = req.body

    const productIndex = products.findIndex(
        product => product.productId === modifiedProduct.productId
    )

    if (productIndex === -1) {
        return res.status(404).json({ message: "product not found" })
    }

    products.splice(productIndex, 1, modifiedProduct)

    res.status(200).json({
        message: "product modified",
        payload: modifiedProduct
    })
})
 
// DELETE product 
productApp.delete('/products/:id', (req, res) => {
    const productId = Number(req.params.id)

    const productIndex = products.findIndex(
        product => product.productId === productId
    )

    if (productIndex === -1) {
        return res.status(404).json({ message: "product not found" })
    }

    products.splice(productIndex, 1)

    res.status(200).json({ message: "product deleted" })
})
 
