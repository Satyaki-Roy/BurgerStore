import axios from "axios";

export const getOrdersByCustomerId = (id) => {
  const config = {
    method: 'get',
    url: `http://127.0.0.1:3000/order?customer_id=${id}`,
  };

  return axios(config);
}

export const newOrderEntry = (option) => {
  const config = {
    method: 'post',
    url: `http://127.0.0.1:3000/order`,
    data: option
  };

  return axios(config);
}