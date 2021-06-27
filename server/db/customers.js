const dbConnection = require("./dbConnection");

const getCustomerId = (name) => {
  return dbConnection("customers")
    .select("id")
    .where({ name })
    .then((rows) => rows[0]);
};

const newCustomerEntry = (name) => {
  return dbConnection("customers")
    .insert({name})
    .then((rows) => rows);
};

module.exports = {
  getCustomerId,
  newCustomerEntry
}
