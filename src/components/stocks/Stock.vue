<template lang="html">
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class='panel-title'>
          {{stock.name}}
          <small>(Price{{stock.price}})</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input type="number" class="form-control" placeholder="Quantity" v-model="quantity">
        </div>
        <div class="pull-right">
          <button type="submit" class="btn btn-success" v-on:click="buyStock" :disabled="quantity <= 0 || !Number.isInteger(quantity)">Buy</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrick: this.stock.price,
        stockQuantity: this.stock.quantity
      };
      console.log(order);
      this.quantity=0;
    }
  }
}
</script>

<style lang="css" scoped>
</style>
