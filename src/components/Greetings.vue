<template>
    <div id="greeting"><p><strong>Personalize this look anyway you like.</strong><br /><em>Tap a product to begin customizing...</em></p></div>
</template>

<script>
export default {
  name: 'Greetings',
  mounted: function() {
    $('#greeting').on('click', function(){
        console.log('greeting');
    });
  }
};
</script>
