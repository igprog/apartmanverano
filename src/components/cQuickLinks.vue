<template>
  <div>
    <div v-for="(x, idx) in menu_" :key="idx" class="pb-1">
        <router-link :to="x.link" :title="x.title">
            <span>
            <icon :name="x.ico"></icon>
            {{ $t(x.title) }}
            </span>
        </router-link>
    </div>
  </div>
</template>

<script>
import cLocaleSwitcher from './cLocaleSwitcher.vue';
export default {
  data() {
    return {
      menu: [
        { link: "/", title: "homePage", ico: null, isVisible: true },
        { link: "gallery", title: "gallery", ico: null, isVisible: true },
        { link: "booking", title: "booking", ico: null, isVisible: true },
        { link: "prices", title: "prices", ico: null, isVisible: false },
        { link: "location", title: "location", ico: null, isVisible: false },
        { link: "contact", title: "contact", ico: null, isVisible: true },
        { link: "test", title: "Test", ico: null, isVisible: false },
      ],
    };
  },
  components: {
    cLocaleSwitcher
  },
  computed: {
    menu_: function () {
      return this.menu.filter((a) => a.isVisible);
    },
  },
};
</script>

<style scoped>
a {
  color: #fff !important;
}
</style>
