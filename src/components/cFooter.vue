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
              <div class="bg-danger mt-3 p-2">
                <a href="https://hr.airbnb.com/rooms/13724758?guests=1&adults=4&location=Njivice%2C%20Primorje-Gorski%20Kotar%20County%20%C5%BEupanija%2C%20Hrvatska&federated_search_id=f565ebfb-4c74-41ea-851f-371a3af1e5f8&source_impression_id=p3_1643974203_etkpoWL%2B7Ds9Vxlp">
                  <icon name="brands/airbnb" scale=3 />  
                    <span class="lead font-weight-bold">airbnb</span>
                  </a>
                </div>
            </div>
            <div class="col-md-5 pt-2">
              <h2>{{$t('location')}}</h2>
              <c-map />
            </div>
            <div class="col-md-2 pt-2">
              <h2>Quick Links</h2>
              <c-quick-links />
            </div>
            <div class="col-md-3 pt-2">
              <h2>{{$t('contact')}}</h2>
              <c-contact aColor="#fff"  />
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
import cQuickLinks from "./cQuickLinks.vue";

export default {
  components: {
    cContact,
    cMap,
    cQuickLinks,
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