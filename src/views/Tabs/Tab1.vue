<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="transparent">
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <Products></Products>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage,IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import Products from '../Products.vue';

export default {
  name: "Tab1",
  components: {
    IonPage,
    IonHeader, IonToolbar, IonTitle,IonContent, Products
  },
}
</script>

<style scoped>

ion-toolbar {
  --background: #19422d;
  --color: white;

  --border-color: transparent;
  --border-width: 0px;
  --min-height: 80px;
  --padding-top: 20px;
  --padding-bottom: 20px;
}

ion-title {
  font-size: 22px;
  font-weight: 600;
  text-transform: uppercase;
}
</style>