const dbConnection = require("./dbConnection");

const newOrderEntry = (options) => {
  return dbConnection("orders")
    .insert(options)
    .then((rows) => rows);
};

const getOrdersByCustomer = (customerId) => {
  console.log(customerId);
  return dbConnection("orders")
    .select("*")
    .where({
      customer_id: customerId,
    })
    .then((rows) => rows);
};

module.exports = {
  newOrderEntry,
  getOrdersByCustomer
};