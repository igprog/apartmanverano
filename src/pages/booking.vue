<template>
  <div class="container">
    <h2>{{ $t('booking') }}</h2>
    <hr>
    <div class="row">
      <div class=col-sm-4>
        <p>{{$t('bookingDesc')}}.</p>
      </div>
      <div class=col-sm-8>
        <c-booking />
      </div>
    </div>
  </div>
</template>

<script>

import cBooking from '../components/cBooking.vue';

export default {
  components: {
    cBooking
  },
  metaInfo: {
    titleTemplate: "%s | Rezervacija",
    meta: [
      {
        name: "description",
        content:
          "Apartment Verano - Rezervacija",
      },
    ],
  },
};
</script>
