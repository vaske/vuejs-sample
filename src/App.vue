<template>
  <div>
    <main>
      <configurator-component :current-view="currentView"></configurator-component>
    </main>
    <footer-component></footer-component>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Configurator from './components/Configurator.vue';
import Footer from './components/Footer.vue';

export default {
  data: function() {
      return {
          currentView: this.$store.state.currentView
      }
  },
  mounted: function() {
    console.log(this.$route.path);
    console.log('this is ready');
  },
  name: 'App',
  components: {
    'configurator-component': Configurator,
    'footer-component': Footer
  },
};
</script>
