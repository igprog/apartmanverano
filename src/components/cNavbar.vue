<template>
  <div>
    <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-white shadow-sm" >
      <div class="container-fluid">
        <a class="navbar-brand" href="../"><img src="../assets/img/logo.png" :alt="$t('appName')" /></a>
        <button class="navbar-toggler" type="button" aria-label="Toggle navigation" @click="openNav()" >
          <span class="navbar-toggler-icon">
            <i class="fas fa-bars" style="font-size: 28px"></i>
          </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li v-for="(x, idx) in menu_" :key="idx" class="nav-item">
                <router-link :to="x.link" :title="x.title">
                  <span class="nav-link text-dark">
                    <icon :name="x.ico"></icon>
                    {{ $t(x.title) }}
                  </span>
                </router-link>
            </li>
            <li class="pt-2 pl-5">
              <c-locale-switcher id="dropdownMenuButton1" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div id="mySidenav" class="sidenav text-uppercase">
      <div class="pt-4">
        <a href="javascript:void(0)" :title="$t('menu')" class="font-weight-bold text-light" @click="closeNav()">{{ $t('menu') }}</a>
        <a href="javascript:void(0)" class="closebtn" @click="closeNav()" :title="$t('close')" ><strong>&times;</strong></a>
        <hr class="m-0 mx-4 mb-2 bg-light" />
      </div>
      <div v-for="(x, idx) in menu_" :key="idx" @click="closeNav()">
        <router-link :to="x.link" :title="x.title">
          <span class="nav-link text-white">
            <icon :name="x.ico"></icon>
            {{ $t(x.title) }}
          </span>
        </router-link>
      </div>
      <div class="p-3">
        <c-locale-switcher id="dropdownMenuButton2" />
      </div>
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
  methods: {
    openNav() {
      document.getElementById("mySidenav").style.width === "250px" 
        ? document.getElementById("mySidenav").style.width = "0"
        : document.getElementById("mySidenav").style.width = "250px";
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      window.scrollTo({ top: 160, behavior: 'smooth' });
    },
  },
};
</script>
