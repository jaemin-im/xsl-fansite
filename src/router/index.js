import Vue from 'vue';
import VueRouter from 'vue-router';
import ScrollCalculateForm from '../components/ScrollCalculateForm.vue';
import SkillAttackSearch from '../components/SkillAttackSearch.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ScrollCalculateForm,
  },
  {
    path: '/scrollSpeedCalculation',
    name: 'Scroll Speed Calculation',
    component: ScrollCalculateForm,
  },
  {
    path: '/saSearch',
    name: 'Skill Attack Search',
    component: SkillAttackSearch,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
