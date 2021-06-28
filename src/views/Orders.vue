<template>
  <div class="orders">
    <form @submit.prevent="getOrders">
      <label for="name"></label>
      <input type="text" id="name" name="name" placeholder="Customer Name" v-model="name">

      <input id="search-button" type="submit" value="Search">
      <p v-if="customerId">Customer ID: {{customerId}}</p>
    </form>
    <hr />
    <div v-if="orders.length">
      <div class="order-list-items" v-for="order in orders" :key="order.id">
        <ol class="order-list-item">
          <li>Bun: {{ order.bun }}</li>
          <li>Salad: {{ (order.salad === 1) ? "Yes" : "No" }}</li>
          <li>Cheese Slices: {{ order["cheese-slice"] }}</li>
          <li>Cutlets: {{ order.cutlet }}</li>
          <li>Total: {{ order.total }}</li>
        </ol>
        <br />
      </div>
    </div>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
import { getCustomerId } from "@/services/customer";
import { getOrdersByCustomerId } from "@/services/order";

export default {
  name: 'Orders',
  data() {
    return {
      name: "",
      orders: [],
      customerId: 0,
      message: "",
    }
  },
  methods: {
    async getOrders() {
      // check if the user exists and if exists get the id
      try {
        this.message = "";
        const response = await getCustomerId(this.name);
        this.customerId = response.data.customerId;
      } catch (e) {
        this.customerId = 0;
        this.message = e.response.data.message;
      } finally {
        this.orders = [];
      }

      if (this.customerId) {
        try {
          const response = await getOrdersByCustomerId(this.customerId);
          this.orders = response.data.orders;
        } catch (e) {
          console.log(e);
        }
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#search-button {
  margin-left: 10px;
}

.order-list-item {
  display: inline;
}
</style>
