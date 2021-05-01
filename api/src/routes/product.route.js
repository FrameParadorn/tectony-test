const productController = require('../controllers/product.controller');

const route = (app) => {
  app.get('/', productController.findAll);
};

module.exports = route;
