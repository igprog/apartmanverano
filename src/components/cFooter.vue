<template>
  <div class="mt-5">
    <div class="bg-dark text-white">
      <div class="pt-3">
        <div class="container-fluid px-5">
          <div class="row">
            <div class="col-md-2 pb-4">
              <div>
              <img
                src="../assets/img/logo.png"
                alt="logo"
                class="img-fluid"
              />
              </div>
              <div class="pt-3">
                <a href="https://www.booking.com/hotel/hr/apartment-verano.hr.html" title="booking.com" target="_blank" rel="noopener">
                <img
                src="../assets/img/award.png"
                alt="award"
                class="img-fluid"
              />
              </a>
              </div>
            </div>
            <div class="col-md-4">
              <h2>{{$t('contact')}}</h2>
              <c-contact />
            </div>
            <div class="col-md-6">
              <c-map />
            </div>
          </div>
        </div>
      </div>
      <footer class="container-fluid pt-3">
        <div class="text-center">
          <span class="small"
            >Copyright © {{ year }} {{ $t('appName') }} | Izrada web
            stranice:
            <a
              href="https://www.igprog.hr"
              title="Izrada web stranica i aplikacija"
              class="font-weight-bold"
              >IG PROG</a
            ></span
          >
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import cContact from "./cContact.vue";
import cMap from "./cMap.vue";

export default {
  components: {
    cContact,
    cMap,
  },
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
a {
  color: #fff !important;
}
</style>