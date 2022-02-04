<template>
  <div>
    <div class="container">
      <h2>{{ $t('homePage') }}</h2>
      <hr>
      <div class="row">
          <div class="col-md-6 text-justify lead">
            {{ $t('mainDesc')}}
          </div>
          <div class="col-md-6">
            <img :src="require(`@/assets/img/gallery/ap2.jpg`)" alt="" class="img-fluid" />
          </div>
      </div>
      <div class="row pt-5">
          <div class="col-md-6 text-justify lead">
            <img :src="require(`@/assets/img/gallery/ap9.jpg`)" alt="" class="img-fluid pt-2 pb-4" />
          </div>
          <div class="col-md-6">
            <h3>{{$t('whatOurPlaceOffers')}}</h3>
            <hr/>
            <div v-for="(x, idx) in offers" :key="idx" class="p-1 pl-3">
              <icon :name="x.icon" scale="2" class="text-secondary"></icon>
              <span class="lead text-secondary pl-2">{{ $t(x.title)}}</span>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: this.$t('appName'),
      titleTemplate: '%s | ' + this.$t('homePage'),
    }
  },
  data() {
    return {
      offers: [
        { icon: "utensils", title: "kitchen" },
        { icon: "wifi", title: "wifi" },
        { icon: "car", title: "freeParkingOnPremises" },
        { icon: "dog", title: "petsAllowed" },
        { icon: "tv", title: "tvWithStandardCable" },
        { icon: "charging-station", title: "eVCharger" },
        { icon: "stop-circle", title: "washer" },
        { icon: "snowflake", title: "airConditioning" }
      ],
    };
  },
};
</script>