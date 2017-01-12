<template>
    <div id="showroom">
        <div :id="currentView" class="bedroom-showroom">
            <div v-for="item in currentItems" :id="item.type" class="prod" v-on:click="showOverlayOptions(item.type)">
                <img :src="item.image" />
            </div>
            <overlay-component :show-overlay="showOverlay" :default-item-type="defaultItemType" :current-items="currentItems"></overlay-component>
        </div>

        <selectedcollection-component :current-view="currentView" :show-thumbs="showThumbs" :default-item-type="defaultItemType" :current-items="currentItems"></selectedcollection-component>

        <greetings-component></greetings-component>

        <thumb-component :show-thumbs="showThumbs" :default-item-type="defaultItemType"></thumb-component>

    </div>
</template>

<script>
import Greetings from './Greetings.vue';
import SelectedCollection from './SelectedCollection.vue';
import Thumb from './Thumb.vue';
import Overlay from './Overlay.vue';

export default {
  data: function() {
      return {
        showThumbs: false,
        defaultItemType:'lamp',
        showOverlay:false,
      }
  },
  computed: {
    currentItems: function () {
        // prepare data for showing up
        var results = [];
        _.each(this.$store.state['room_'+this.currentView], function(val) {
         var dresults = _.filter(data, {'index': val});
         results.push(dresults[0]);
        });
      return results;
    }
  },
  props: ['currentView'],
  name: 'Configurator',
  components: {
    'greetings-component': Greetings,
    'selectedcollection-component':SelectedCollection,
    'thumb-component':Thumb,
    'overlay-component':Overlay
  },
  methods: {
    showOverlayOptions: function(type) {
        this.showThumbs = true;
        this.showOverlay = true;
        this.defaultItemType = type;
    }
  },
  mounted: function() {
    // listener for pege load
    window.addEventListener('load', () => {
        // TO-DO move to vuejs way
        $('#'+this.currentView).find('div.prod').not('clone').each(function(index, elm){
            var prodHeight = $('img', elm).height();
            var prodWidth = $('img', elm).width();
            $(elm).css({
                'margin-left': -prodWidth / 2 + 'px',
                'height': prodHeight,
                'width': prodWidth
            });
        });
    })
  },
  watch: {
    currentItems:function(){
        $('#'+this.currentView).find('div.prod').not('clone').each(function(index, elm){
            var prodHeight = $('img', elm).height();
            var prodWidth = $('img', elm).width();
            $(elm).css({
                'margin-left': -prodWidth / 2 + 'px',
                'height': prodHeight,
                'width': prodWidth
            });
        });
    }
  }
};
</script>
