import Vue from 'vue'
import VueRouter from 'vue-router'
import Import from '../pages/Import.vue'
import Process from '../pages/Process.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/import', component: Import },
    { path: '/process', component: Process }
]

export default new VueRouter({
    routes: routes
})