var express = require('express');
var router = express.Router();

const { getCustomerId, newCustomerEntry } = require("../db/customers");
const { newOrderEntry, getOrdersByCustomer } = require("../db/orders");

router.get('/customer', async function(req, res, next) {
  const name = req.query.name;
  const { id:customerId } = await getCustomerId(name);
  res.send({
    customerId,
  });
});

router.post('/customer', async function(req, res, next) {
  const name = req.body.name;
  const customerId = (await newCustomerEntry(name))[0];
  res.send({
    customerId,
  });
});

router.post('/order', async function(req, res, next) {
  const order = await newOrderEntry(req.body);
  res.send({
    order,
  });
});

router.get('/order', async function(req, res, next) {
  const orders = await getOrdersByCustomer(req.query.customer_id);
  res.send({
    orders,
  });
});

module.exports = router;
