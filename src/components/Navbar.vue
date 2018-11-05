<template>
  <b-navbar toggleable="md" variant="light">
    <b-button variant="light" v-on:click="toggleSideNav"><icon name="bars"></icon></b-button>
    <b-navbar-brand style="margin-left: 16px;" v-text="applicationName"></b-navbar-brand>
  </b-navbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters('application', {
      applicationName: 'getApplicationName'
    })
  },
  methods: {
    ...mapActions('application',[
      'toggleSideNav'
    ])
  }
}
</script>
<style lang="scss"></style>