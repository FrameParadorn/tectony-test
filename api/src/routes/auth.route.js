var express = require('express');
var router = express.Router();

const authController = require('../controllers/auth.controller.js')

const route = (app) => {
  router.get('/login', authController.login);

  app.use("/api", router);
};

module.exports = route;
