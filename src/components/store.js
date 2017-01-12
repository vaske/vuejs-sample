
import Vue from 'vue';
import Vuex from 'vuex';
import config from './config';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    initConf:config,
    currentConfig:{},
    currentView:'bedroom',
    room_bedroom: {
      bed: 0,
      nightstand: 5,
      dresser: 1,
      lamp: 2,
      rug: 3,
      art: 4
    },
    room_livingroom:{
      sofa: 101,
      sidechair: 103,
      cocktailtable: 111,
      livrug: 114,
      endtable: 106,
      livart: 100
    },
    room_diningroom:{
      table: 203,
      chairs: 200,
      curio: 202,
      sideboard: 204,
      dinrug: 209,
      dinart: 205
    },
    defaultItemType:'lamp'
  },
  mutations: {
    increment (state) {
      state.count++
    },
    setView (state, newVal) {
        state.currentView = newVal;
    },
    updateBedroom (state, item) {
      console.log(item);
      state['room_'+item.room][item.type] = item.index;
    }

  }
});

export default store;