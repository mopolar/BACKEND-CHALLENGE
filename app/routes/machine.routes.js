module.exports = (app) => {
    const products = require('../controllers/machine.controller.js');

    // Create a new coffee machine
    app.post('/products/machine', products.create);

    // Retrieve all coffee machines
    app.get('/products/machine', products.findAll);

    // Retrieve a small machine product
    app.get('/products/machine/small', products.findSmall);

    // Retrieve a large machine product
    app.get('/products/machine/large', products.findLarge);

    // Retrieve a espresso machine product
    app.get('/products/machine/espresso', products.findEspresso);

    // Retrieve a machine product with water line compatible
    app.get('/products/machine/with_water', products.findWithWater);

    // Retrieve a machine product without water line compatible
    app.get('/products/machine/without_water', products.findWithoutWater);

    // Update a Note with noteId
    app.put('/products/:noteId', products.update);

    // Delete a Note with noteId
    app.delete('/products/:noteId', products.delete);
}