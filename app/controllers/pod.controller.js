const Product = require('../models/pod.model.js');

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
        coffee_flavor: req.body.coffee_flavor,
        pack_size: req.body.pack_size

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
    Product.find({}, { _id: 0, createdAt:0, updatedAt:0, __v: 0, product_type: 0, coffee_flavor: 0, pack_size:0 })
    .then(products => {
        res.send(products);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving products."
        });
    });
};



// Find a small pod product
exports.findSmall = (req, res) => {
    var query = { product_type: "small coffee pod" };
    Product.find(query, { _id: 0, createdAt:0, updatedAt:0, __v: 0, product_type: 0, coffee_flavor: 0, pack_size:0 })
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

// Find a large pod product
exports.findLarge = (req, res) => {
    var query = { product_type: "large coffee pod" };
    Product.find(query, { _id: 0, createdAt:0, updatedAt:0, __v: 0, product_type: 0, coffee_flavor: 0, pack_size:0 })
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

// Find a espresso pod product
exports.findEspresso = (req, res) => {
    var query = { product_type: "espresso pod" };
    Product.find(query, { _id: 0, createdAt:0, updatedAt:0, __v: 0, product_type: 0, coffee_flavor: 0, pack_size:0 })
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

// Find a caramel 
exports.findCaramel  = (req, res) => {
    var query = { coffee_flavor:  caramel};
    Product.find(query, { _id: 0, createdAt:0, updatedAt:0, __v: 0, product_type: 0, coffee_flavor: 0, pack_size:0 })
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

// Find a vanilla 
exports.findVanilla  = (req, res) => {
    var query = { coffee_flavor:  vanilla};
    Product.find(query, { _id: 0, createdAt:0, updatedAt:0, __v: 0, product_type: 0, coffee_flavor: 0, pack_size:0 })
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

// Find a psl 
exports.findpsl  = (req, res) => {
    var query = { coffee_flavor:  psl};
    Product.find(query, { _id: 0, createdAt:0, updatedAt:0, __v: 0, product_type: 0, coffee_flavor: 0, pack_size:0 })
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

// Find a mocha 
exports.findmocha  = (req, res) => {
    var query = { coffee_flavor:  mocha};
    Product.find(query, { _id: 0, createdAt:0, updatedAt:0, __v: 0, product_type: 0, coffee_flavor: 0, pack_size:0 })
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

// Find a hazelnut 
exports.findhazelnut  = (req, res) => {
    var query = { coffee_flavor:  hazelnut};
    Product.find(query, { _id: 0, createdAt:0, updatedAt:0, __v: 0, product_type: 0, coffee_flavor: 0, pack_size:0 })
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

// Find a 1 dozen
exports.findone  = (req, res) => {
    var query = { pack_size:  "1" };
    Product.find(query, { _id: 0, createdAt:0, updatedAt:0, __v: 0, product_type: 0, coffee_flavor: 0, pack_size:0 })
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

// Find a 3 dozen 
exports.findthree  = (req, res) => {
    var query = { pack_size:  "3" };
    Product.find(query, { _id: 0, createdAt:0, updatedAt:0, __v: 0, product_type: 0, coffee_flavor: 0, pack_size:0 })
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

// Find a 5 dozen 
exports.findfive  = (req, res) => {
    var query = { pack_size:  "5" };
    Product.find(query, { _id: 0, createdAt:0, updatedAt:0, __v: 0, product_type: 0, coffee_flavor: 0, pack_size:0 })
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

// Find a 7 dozen 
exports.findseven  = (req, res) => {
    var query = { pack_size:  "7" };
    Product.find(query, { _id: 0, createdAt:0, updatedAt:0, __v: 0, product_type: 0, coffee_flavor: 0, pack_size:0 })
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

// Find a espresso vanilla pods
exports.findEspressoVanilla  = (req, res) => {
    var query = { pack_size:  "7" };
    Product.find(query, { _id: 0, createdAt:0, updatedAt:0, __v: 0, product_type: 0, coffee_flavor: 0, pack_size:0 })
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
