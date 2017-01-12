<template>
  <div id="root">
    <header-component :current-view="currentView"></header-component>
    <main>
      <configurator-component :current-view="currentView"></configurator-component>
    </main>
    <footer-component></footer-component>
  </div>
</template>

<script>
import Header from './Header.vue';
import Configurator from './Configurator.vue';
import Footer from './Footer.vue';

export default {
  data: function() {
      return {
          currentView: this.$store.state.currentView
      }
  },
  name: 'Main',
  components: {
    'header-component': Header,
    'configurator-component': Configurator,
    'footer-component': Footer
  },
};
</script>
