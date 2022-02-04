<template>
  <div class="container">
    <h2>{{ $t('gallery') }}</h2>
    <hr>
    <div>
      <div id="app">
          <div class="row">
              <div v-for="(image, i) in images" :key="i" class="col-sm-3 py-2">
                <img class="img-fluid" :src="image" @click="onClick(i)">
            </div>
        </div>
        <vue-gallery-slideshow :images="images" :index="index" @close="index = null"></vue-gallery-slideshow>
    </div>
    </div>
  </div>
</template>

<script>
import VueGallerySlideshow from 'vue-gallery-slideshow'
export default {
  metaInfo () {
    return {
      title: this.$t('appName'),
      titleTemplate: '%s | ' + this.$t('gallery'),
    }
  },
  components: {
    VueGallerySlideshow
  },
  methods: {
    onClick(i) {
      this.index = i;
    }
  },
  data() {
      return {
        index: null
      }
  },
  computed: {
    images : function() {
      const x = [];
      for (let i = 1; i <= 20; i++) {
        x.push(require(`@/assets/img/gallery/ap${i}.jpg`))
      }
      return x;
    }
  }
};
</script>
