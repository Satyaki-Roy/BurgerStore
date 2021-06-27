<template>
  <div class="order-burger">
    <h1>Order burger</h1>
    <form @submit.prevent="formSubmit">
      <div class="form-elements">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" v-model="name">
      </div>

      <div class="form-elements">
        <label for="salad">Salad:</label>
        <select id="salad" name="salad" v-model="salad">
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>
      </div>

      <div class="form-elements">
        <label for="cheese-slice">Cheese Slice:</label>
        <input type="number" id="cheese-slice" name="cheese-slice" v-model="cheeseSlice">
      </div>

      <div class="form-elements">
        <label for="cutlets">Cutlets:</label>
        <input type="number" id="cutlets" name="cutlets" v-model="cutlet">
      </div>

      <p>{{ calculateTotal }}</p>
      <input type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
import {calculatePrice} from "@/utils/calculate-price";
// import {getCustomerId} from "@/db/customers";

export default {
  name: 'OrderBurger',
  data() {
    return {
      name: "",
      bun: 2,
      salad: 0,
      cheeseSlice: 0,
      cutlet: 0,
      customerId: 0,
    }
  },
  computed: {
    calculateTotal() {
      return calculatePrice(this.bun, this.salad, this.cheeseSlice, this.cutlet);
    }
  },
  methods: {
    async formSubmit() {
      // check if the customer is present in the DB
      // this.customerId = await getCustomerId(this.name);
      // if customer is not found insert the customer and get the id

      // const id = await insertOrderInDB(this.bun, this.salad, this.cheeseSlice, this.cutlet, this.calculateTotal);
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
