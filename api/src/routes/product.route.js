const productController = require('../controllers/product.controller');

const route = (app) => {
  app.get('/api/product/:id', productController.findOne);
  app.get('/api/product/:id/related', productController.findRelated);
};

module.exports = route;
