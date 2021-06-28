<template>
  <div class="order-burger">
    <h1>Order burger</h1>
    <form @submit.prevent="placeOrder">
      <div class="form-elements">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" v-model="name" required>
      </div>

      <div class="form-elements">
        <label for="salad">Salad:</label>
        <select id="salad" name="salad" v-model="salad">
          <option value="1">Yes</option>
          <option value="0" selected>No</option>
        </select>
      </div>

      <div class="form-elements">
        <label for="cheese-slice">Cheese Slice:</label>
        <input type="number" value="1" id="cheese-slice" name="cheese-slice" v-model="cheeseSlice">
      </div>

      <div class="form-elements">
        <label for="cutlets">Cutlets:</label>
        <input type="number" value="1" id="cutlets" name="cutlets" v-model="cutlet">
      </div>

      <p>Total: {{ calculateTotal }}</p>
      <input type="submit" value="Place Order">
    </form>
    <p v-if="orderPlaced">Order Has been placed</p>
  </div>
</template>

<script>
import {calculatePrice} from "@/utils/calculate-price";
import {getCustomerId, registerCustomer} from "@/services/customer";
import {newOrderEntry} from "@/services/order";

export default {
  name: 'OrderBurger',
  data() {
    return {
      name: "",
      bun: 2,
      salad: 0,
      cheeseSlice: 1,
      cutlet: 1,
      customerId: 0,
      orderPlaced: false,
    }
  },
  computed: {
    calculateTotal() {
      return calculatePrice(this.bun, this.salad, this.cheeseSlice, this.cutlet);
    }
  },
  methods: {
    async placeOrder() {
      // check if the customer exists and if exits get the id
      try {
        const response = await getCustomerId(this.name);
        this.customerId = response.data.customerId;
      } catch (e) {
        this.customerId = 0;
      }

      // customer doesn't exists, register him/her and get the id
      if (!this.customerId) {
        try {
          const response = await registerCustomer(this.name);
          this.customerId = response.data.customerId;
        } catch (e) {
          this.customerId = 0;
        }
      }

      // place the order
      if (this.customerId) {
        try {
          const option = {
            "bun": this.bun,
            "salad": this.salad,
            "cheese-slice": this.cheeseSlice,
            "cutlet": this.cutlet,
            "total": this.calculateTotal,
            "customer_id": this.customerId
          }

          const response = await newOrderEntry(option);

          if (response.data.order.length) {
            this.orderPlaced = true;
            // order placed message will be shown only for 2 sec
            setTimeout(() => {
              this.orderPlaced = false;
            }, 2000);
          }
        } catch (e) {
          console.log(e);
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-elements {
  margin: 10px 0 10px 0;
}
</style>
