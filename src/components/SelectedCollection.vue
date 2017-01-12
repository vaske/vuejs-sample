<template>
    <div id="select">
        <div id="collection">
            <h2 class="select-title" v-if="currentView === 'bedroom'">Bedroom Collection</h2>
            <h2 class="select-title" v-if="currentView === 'diningroom'">Diningroom Collection</h2>
            <h2 class="select-title" v-if="currentView === 'livingroom'">Livingroom Collection</h2>
            <hr>
            <ul>
                <li v-for="item in currentItems" v-bind:id="item.type">
                    <a href="#" class="reshow" :data-type="item.type" :id="item.index" v-on:click="showOptions(item.type)">
                        <img :src="item.thumbnail">
                    </a>{{item.name}} - {{item.type}} - {{item.index}}
                </li>
            </ul>
        </div>
        <div class="email-button">
            <a href="#hook-me-up">Email Me</a>
        </div>
    </div>
</template>

<script>

export default {
  name: 'SelectedCollection',
  props: ['currentView','showThumbs','defaultItemType', 'currentItems'],
  data: function() {
    // prepare data for showing up
    var results = [];
    _.each(this.$store.state['room_'+this.currentView], function(val) {
      var dresults = _.filter(data, {'index': val});
      results.push(dresults[0]);
    });
    return {
      items: results,
    }
  },
  methods:{
    showOptions: function(type) {
        this.$parent.showThumbs = true;
        this.$parent.showOverlay = true;
        this.$parent.defaultItemType = type;
    }
  },

};
</script>
