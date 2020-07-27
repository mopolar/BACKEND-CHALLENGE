const Product = require('../models/machine.model.js');

// Create and Save a new Product
exports.create = (req, res) => {
    // Validate request
    if(!req.body.product_name) {
        return res.status(400).send({
            message: "Product content can not be empty"
        });
    }

    // Create a Product
    const product = new Product({
        product_name: req.body.product_name || "Untitled Product", 
        product_type: req.body.product_type,
        model: req.body.model,
        water_line_compatible: req.body.water_line_compatible
    });

    // Save Product in the database
    product.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Product."
        });
    });
};

// Retrieve and return all products from the database.
exports.findAll = (req, res) => {
    Product.find({}, { _id: 0, createdAt:0, updatedAt:0, __v: 0, product_type:0, model:0, water_line_compatible:0})
    .then(products => {
        res.send(products);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving products."
        });
    });
};



// Find a small machine product
exports.findSmall = (req, res) => {
    var query = { product_type: "small machine" };
    Product.find(query, { _id: 0, createdAt:0, updatedAt:0, __v: 0, product_type:0, model:0, water_line_compatible:0})
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "Product not found"
            });            
        }
        res.send(product);
    }).catch(err => {
        return res.status(500).send({
            message: "Error retrieving product"
        });
    });
};

// Find a large machine product
exports.findLarge = (req, res) => {
    var query = { product_type: "large machine" };
    Product.find(query, { _id: 0, createdAt:0, updatedAt:0, __v: 0, product_type:0, model:0, water_line_compatible:0})
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "Product not found"
            });            
        }
        res.send(product);
    }).catch(err => {
        return res.status(500).send({
            message: "Error retrieving product"
        });
    });
};

// Find a espresso machine product
exports.findEspresso = (req, res) => {
    var query = { product_type: "espresso machine" };
    Product.find(query, { _id: 0, createdAt:0, updatedAt:0, __v: 0, product_type:0, model:0, water_line_compatible:0})
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "Product not found"
            });            
        }
        res.send(product);
    }).catch(err => {
        return res.status(500).send({
            message: "Error retrieving product"
        });
    });
};

// Find a machine product with water line compatible
exports.findWithWater = (req, res) => {
    var query = { water_line_compatible: true };
    Product.find(query, { _id: 0, createdAt:0, updatedAt:0, __v: 0, product_type:0, model:0, water_line_compatible:0})
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "Product not found"
            });            
        }
        res.send(product);
    }).catch(err => {
        return res.status(500).send({
            message: "Error retrieving product"
        });
    });
};

// Find a machine product without water line compatible
exports.findWithoutWater = (req, res) => {
    var query = { water_line_compatible: false };
    Product.find(query, { _id: 0, createdAt:0, updatedAt:0, __v: 0, product_type:0, model:0, water_line_compatible:0})
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "Product not found"
            });            
        }
        res.send(product);
    }).catch(err => {
        return res.status(500).send({
            message: "Error retrieving product"
        });
    });
};

// Update a product identified by the product in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.product_name) {
        return res.status(400).send({
            message: "Product content can not be empty"
        });
    }

    // Find product and update it with the request body
    Product.findByIdAndUpdate(req.params.productId, {
        product_name: req.body.product_name || "Untitled Product", 
        product_type: req.body.product_type,
        model: req.body.model,
        product_type: req.body.water_line_compatible
    }, {new: true})
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            });
        }
        res.send(product);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            });                
        }
        return res.status(500).send({
            message: "Error updating product with id " + req.params.productId
        });
    });
};

// Delete a product with the specified productId in the request
exports.delete = (req, res) => {
    Product.findByIdAndRemove(req.params.productId)
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            });
        }
        res.send({message: "Product deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            });                
        }
        return res.status(500).send({
            message: "Could not delete product with id " + req.params.productId
        });
    });
};
