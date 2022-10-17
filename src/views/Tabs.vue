<template>
  <ion-page>
    <ion-content>
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom" class="custom-tab">
          <ion-tab-button tab="tab1" href="/tabs/tab1">
            <ion-icon :icon="home" />
          </ion-tab-button>

          <ion-tab-button tab="tab2" href="/tabs/tab2">
            <ion-icon router-link-active="active" :icon="location" />
          </ion-tab-button>
          <ion-tab-button tab="tab3" href="/tabs/tab3">
            <ion-icon router-link-active="active" :icon="personCircleOutline" />
          </ion-tab-button>

          <ion-tab-button tab="tab3" router-link-active="active" href="/tabs/tab3">
            <ion-icon :icon="basket" />
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonContent,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from '@ionic/vue';
import { ellipse, square, triangle, home, location, personCircleOutline, basket } from 'ionicons/icons';
export default {
  name: 'Tabs',
  components: {
    IonContent,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonPage,
    IonRouterOutlet,
  },
  setup() {
    return {
      ellipse,
      square,
      triangle,
      home,
      location,
      personCircleOutline,
      basket,
    };
  },
};
</script>

<style>
.custom-tab {
  --background: #fff;
  --color: #000;
  --color-selected: #34A907;
  --background-selected: #fff;
}
ion-content{
  --background	: url("../../public/image/texture.jpg") no-repeat fixed center ;

}
</style>