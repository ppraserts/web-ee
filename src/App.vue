<template>
  <div id="app">
    <side-nav id="mfu-ee-sidenav"></side-nav>
    <nav-bar id="mfu-ee-navbar"></nav-bar>
    <div id="mfu-ee-container">
        <b-container fluid>
        <router-view/>
      </b-container>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Sidenav from './components/Sidenav.vue';
import Navbar from './components/Navbar.vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import RingLoader from 'vue-spinner/src/RingLoader.vue'
import BounceLoader from 'vue-spinner/src/BounceLoader.vue'

export default {
  components:{
    'side-nav': Sidenav,
    'nav-bar': Navbar,
    PulseLoader,
    RingLoader,
    BounceLoader
  },
  computed: {
    ...mapGetters('application', {
      applicationName: 'getApplicationName'
    })
  },
  mounted() {
    document.title = this.applicationName
  },
  name: 'app'
}
</script>

<style lang="scss">
body {
  transition: background-color .5s;
  font-size: 16px;
  background-color: #F5F7FA;
}

#mfu-ee-container, #mfu-ee-navbar{
  transition: margin-left .5s;
}
#mfu-ee-navbar{
  background-color: #fff !important;
  -webkit-box-shadow: 0px 0 5px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0 5px 0 rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
}

#mfu-ee-container {
  padding: 10px;
}
</style>
