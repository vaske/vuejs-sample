<template>
    <transition name="slide-fade">
        <div class="overlay-wrapper">
            <div v-for="item in currentItems" :id="item.type" class="prod clone" v-show="defaultItemType === item.type && showOverlayImage">
                <img :src="item.image" />
            </div>
            <div id="overlay" style="display: block;" v-if="showOverlay" v-on:click="hideOverlay()"></div>
        </div>
    </transition>
</template>

<script>

export default {
  name: 'Overlay',
  props: ['defaultItemType', 'showOverlay', 'currentItems'],
  computed: {
    showOverlayImage: function () {
        return this.showOverlay;
    },
    items: function() {
        return _.filter(data, {
                'type': this.defaultItemType
              });
    }
  },
  methods: {
    hideOverlay: function() {
        this.$parent.showThumbs = false;
        this.$parent.showOverlay = false;
    }
  },
  watch: {
    showOverlayImage: function(val) {
        if(val) {
            // trick to set proper margin left on overlay items
            var prodHeight = $('#' + this.defaultItemType + ' img').height();
            var prodWidth = $('#' + this.defaultItemType + ' img').width();
            $('.overlay-wrapper').find('#' + this.defaultItemType).css({
                'margin-left': -prodWidth / 2 + 'px',
                'height': prodHeight,
                'width': prodWidth
            });
        }
    },
  }
};
</script>