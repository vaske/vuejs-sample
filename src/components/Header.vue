<template>
  <header class="header">
    <nav class="room-nav">
        <ul>
            <li :class="{'active': tabBedroom}"><a href="#bedroom" id="tab-bedroom" @click="showBedroom">Bedroom</a></li>
            <li :class="{'active': tabLivingRoom}"><a href="#livingroom" id="tab-livingroom" @click="showLivingRoom">Living room</a></li>
            <li :class="{'active': tabDiningRoom}"><a href="#diningroom" id="tab-diningroom" @click="showDiningRoom">Dining</a></li>
            <!-- todo make menu dynamic
            <li v-for="(value, key) in titles">
              {{ value }}
            </li>-->
        </ul>

    </nav>
  </header>
</template>

<script>


export default {
  props: ['currentView'],
  data() {
      return {
          tabBedroom: true,
          tabLivingRoom: false,
          tabDiningRoom: false,
          titles: {
              'bedroom'  : 'Bedroom',
              'diningroom': 'Dining room',
              'livingroom': 'Living room'
          }
      }
  },
  name: 'Header',
  methods: {
    showBedroom() {
      this.tabBedroom = true;
      this.tabLivingRoom = false;
      this.tabDiningRoom = false;
      this.$parent.currentView = 'bedroom';
      // this.$store.commit('setView', 'bedroom');
    },
    showLivingRoom() {
      this.tabBedroom = false;
      this.tabLivingRoom = true;
      this.tabDiningRoom = false;
      console.log('showLivingRoom');
      this.$store.commit('setView', 'livingroom');
      this.$parent.currentView = 'livingroom';
      //this.$emit('update-currentView', 'livingroom');
    },
    showDiningRoom() {
      this.tabBedroom = false;
      this.tabLivingRoom = false;
      this.tabDiningRoom = true;
      console.log('showDiningRoom');
      this.$store.commit('setView', 'diningroom');
      this.$parent.currentView = 'diningroom';
    }
  },
  mounted: function(){

  }
};
</script>
