<template>
    <transition name="slide-fade">
        <div id="thumbs" v-if="showThumbsWrapper">
            <div class="top">
                <h1>Select a Product</h1>
                <a class="btn close" v-on:click="hideThumbs">X</a>
            </div>
            <swiper :options="swiperOption">
                <swiper-slide  v-for="item in items" v-bind:id="item.type">
                    <a href="#" class="build" :data-type="item.type" :id="item.index" v-on:click="useThisItem(item)">
                        <img :src="item.thumbnail"><br>{{item.name}}
                    </a>
                </swiper-slide>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </div>
    </transition>
</template>

<script>

export default {
  name: 'Thumb',
  props: ['showThumbs','defaultItemType'],
  data() {
    var noOfSlides = Math.round(document.documentElement.clientWidth / 115); // 115px is size of image and space
    return {
      swiperOption: {
        slidesPerView: noOfSlides,
        paginationClickable: true,
        spaceBetween: 15,
        keyboardControl: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
      }
    }
  },
  computed: {
    showThumbsWrapper: function () {
      return this.showThumbs;
    },
    items: function() {
      return _.filter(data, {'type': this.defaultItemType});
    }
  },
  methods: {
    hideThumbs: function() {
        this.$parent.showThumbs = false;
        this.$parent.showOverlay = false;
    },
    useThisItem: function(item) {
        this.$store.commit('updateBedroom', item);
    }
  },
  watch: {
    showThumbsWrapper: function(val) {
        if(val) {
          console.log('show wrapper');
        }
    },
    defaultItemType: function() {
        console.log('changed');
    }
  }
};
</script>
