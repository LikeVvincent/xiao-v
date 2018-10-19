import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import(/* webpackChunkName: "router" */ '@/components/Home');

Vue.use(Router);

let routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes,
});
