<template>
  <ion-grid>
    <ion-row>
      <ion-col size="6" v-for="product in products" v-bind:key="product.id">
        <Product :item="product"></Product>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script>
import {IonRow, IonCol, IonGrid} from '@ionic/vue';
import Product from './Product.vue';
import axios from 'axios'

export default {
  name: "Products",
  components: {
    IonRow,
    IonCol,
    IonGrid,
    Product
  },

  data() {
    return {
      products: []
    }
  },

  mounted()
  {
    this.getProducts()
  },
  methods: {
    getProducts() {
      axios.get("https://olotsomsa.com/api/products")
          .then(response => {
            this.products = response.data.data
          })
    }
  }
}
</script>

<style scoped>

</style>