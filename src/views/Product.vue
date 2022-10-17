<template>
  <div class="card" v-if="item && item.id">
    <img :src="item.image" alt="">
    <div class="card-inner">
      <ion-card-title>{{ item.name }}</ion-card-title>
      <p>{{ numberWithCommas(item.price) }} so'm</p>
      <ion-row class="ion-justify-content-center">
        <ion-col size="3">
          <ion-button color="danger" @click="addToCart(item)">-</ion-button>
        </ion-col>
        <ion-col size="3">
            <span class="parent">
            <span>0</span>
            </span>
        </ion-col>
        <ion-col size="3">
          <ion-button color="success" @click="addToCart(item)">+</ion-button>
        </ion-col>
      </ion-row>
    </div>
  </div>
</template>

<script>
import {IonCardTitle, IonRow, IonCol, IonButton} from '@ionic/vue';

export default {
  name: "Product",
  components: {
    IonCardTitle,
    IonRow,
    IonCol,
    IonButton
  },
  props: {
    item: {
      image: String,
      name: String,
      price: Number,
      id: Number
    }
  },
  methods: {
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    addToCart() {
      console.log(this.item)
    }
  }
}
</script>

<style scoped>

.card {
  --background: transparent;
  position: relative;
  height: 252px;
}

.card img {
  width: 120px;
  position: absolute;
  z-index: 1;
  transform: translateX(50%);
  right: 50%;
  top: 0;
}

.card-inner {
  background: #FDB913;
  border-radius: 10px;
  position: absolute;
  top: 52px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  height: 200px;
  padding-top: 80px;
}

ion-card-title {
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
}

p {
  margin: 8px auto;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
}

ion-button {
  width: 30px;
  height: 30px;
  --border-radius: 4px;
}

span {
  color: #FF0000;
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 23px;
  text-align: center;
  width: 100%;
  height: 100%;
  display: table-cell;
  vertical-align: middle;
}
.parent{
  display: table;
}

</style>