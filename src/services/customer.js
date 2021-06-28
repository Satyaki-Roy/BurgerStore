import axios from "axios";

export const getCustomerId = (name) => {
  const config = {
    method: 'get',
    url: `http://127.0.0.1:3000/customer?name=${name}`,
  };

  return axios(config);
}

export const registerCustomer = (name) => {
  const config = {
    method: 'post',
    url: `http://127.0.0.1:3000/customer`,
    data: {
      name
    }
  };

  return axios(config);
}