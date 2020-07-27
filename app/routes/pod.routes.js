module.exports = (app) => {
    const products = require('../controllers/pod.controller.js');

    // Create a new pod
    app.post('/products/pod', products.create);

    // Retrieve all pods
    app.get('/products/pod', products.findAll);

    // Retrieve a small pod product
    app.get('/products/pod/small', products.findSmall);

    // Retrieve a large pod product
    app.get('/products/pod/large', products.findLarge);

    // Retrieve a espresso pod product
    app.get('/products/pod/espresso', products.findEspresso);

    // Retrieve a caramel pod
    app.get('/products/pod/caramel', products.findCaramel);

    // Retrieve a vanilla pod
    app.get('/products/pod/vanilla', products.findVanilla);

    // Retrieve a psl pod
    app.get('/products/pod/psl', products.findpsl);

    // Retrieve a mocha pod
    app.get('/products/pod/mocha', products.findmocha);

    // Retrieve a hazelnut pod
    app.get('/products/pod/hazelnut', products.findhazelnut);

    // Retrieve a 1 dozen
    app.get('/products/pod/one_dozen', products.findone);

    // Retrieve a 3 dozen
    app.get('/products/pod/three_dozen', products.findthree);

    // Retrieve a 5 dozen
    app.get('/products/pod/five_dozen', products.findfive);

    // Retrieve a 7 dozen
    app.get('/products/pod/seven_dozen', products.findseven);

    // Retrieve a espresso vanilla pods
    app.get('/products/pod/espresso_vanilla', products.findEspressoVanilla);

    // Update a Note with noteId
    app.put('/products/:noteId', products.update);

    // Delete a Note with noteId
    app.delete('/products/:noteId', products.delete);
}