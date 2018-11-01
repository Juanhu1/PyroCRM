const express = require('express');
const customers = require('../routes/customers');

module.exports = function(app) {
  app.use(express.json());
  console.log('set 1..');
  app.use('/api/customers', customers);
  //app.use(error);
}