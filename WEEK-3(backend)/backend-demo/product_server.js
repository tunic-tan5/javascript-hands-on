// import express
import express from 'express'

// create app
const app = express()

// body parsing middleware
app.use(express.json())

// in-memory data
let products = []
 
// GET all products 
app.get('/products', (req, res) => {
    res.status(200).json({
        message: "all products",
        payload: products
    })
}) 
// GET product by id 
app.get('/products-id/:id', (req, res) => {
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
app.get('/products/brand/:brandName', (req, res) => {
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
app.post('/products', (req, res) => {
    const newProduct = req.body
    products.push(newProduct)

    res.status(201).json({
        message: "new product created",
        payload: newProduct
    })
})
 
// PUT update product 
app.put('/products', (req, res) => {
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
app.delete('/products/:id', (req, res) => {
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
 
// start server 
app.listen(3000, () => {
    console.log('HTTP server listening on port 3000...')
})
