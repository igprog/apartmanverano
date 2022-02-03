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
import { mixin } from "../mixins/mixin.js";

export default {
  metaInfo: {
    titleTemplate: "%s | Kontakt",
    meta: [
      {
        name: "description",
        content:
          "Za sva pitanja kontaktirajte nas putem telefona ili emaila ili ispunite formu za kontakt.",
      },
    ],
  },
  mixins: [mixin],
  components: {
    cContact,
    cContactForm,
  },
};
</script>