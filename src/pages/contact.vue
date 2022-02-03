<template>
  <div>
    <div class="container">
      <h2>{{ $t('contact') }}</h2>
      <hr>
      <div class="row mt-5">
        <div class="col-lg-5">
          <c-contact :showIcon="true" />
        </div>
        <div class="col-lg-7">
          <c-contact-form />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cContact from "../components/cContact.vue";
import cContactForm from "../components/cContactForm.vue";
export default {
  metaInfo () {
    return {
      title: this.$t('appName'),
      titleTemplate: '%s | ' + this.$t('contact'),
    }
  },
  components: {
    cContact,
    cContactForm,
  },
};
</script>