require("file-loader?name=data.[ext]!./data.js");

var $ = require('jquery');

import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import App from './App.vue';

import store from './components/store';
require("!style-loader!css-loader!sass-loader!./assets/sass/main.scss");

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import _ from 'lodash';

import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper);


const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: App},
    {path: '/livingroom', component: App},
    {path: '/diningroom', component: App}
  ]
});

export default new Vue({
  router,
  $, // inject jquery for effects
  template: `
    <div id="app">
      <header class="header">
        <nav class="room-nav">
          <ul>
            <li><router-link :to="{path:'/', params:{currentView:'bedroom'}}">Bedroom</router-link></li>
            <li><router-link :to="{path:'livingroom', params:{currentView:'livingroom'}}">Livingroom</router-link></li>
            <li><router-link :to="{path:'diningroom', params:{currentView:'diningroom'}}">Diningroom</router-link></li>
          </ul>
        </nav>
      </header>
      <router-view></router-view>
    </div>
   ` ,
  store, // inject store to all children
  _, // inject lodash
}).$mount('#app');
