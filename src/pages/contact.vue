<template>
  <div>
    <div class="container">
      <h2>{{ $t('contact') }}</h2>
      <hr>
      <div class="row mt-5">
        <div class="col-lg-5 pb-5">
          <c-contact :showIcon="true" aColor="#000" />
        </div>
        <div class="col-lg-7">
          <c-map />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cContact from "../components/cContact.vue";
import cMap from "../components/cMap.vue";
export default {
  metaInfo () {
    return {
      title: this.$t('appName') + ', ' + this.$t('appDesc'),
      titleTemplate: '%s | ' + this.$t('contact'),
    }
  },
  components: {
    cContact,
    cMap,
  },
};
</script>