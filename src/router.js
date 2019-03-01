import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import CreateProjet from './views/CreateProjet.vue';
import Projet from './views/Projet.vue';
import Client from './views/Client.vue';
import Salaries from './views/Salaries.vue';
import CreateClient from './views/CreateClient.vue';
import ProjetDetail from './views/ProjetDetail.vue';
import ProjetUpdate from './views/ProjetUpdate.vue';
import CreateSalaries from './views/CreateSalaries.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/Projet',
      name: 'Projet',
      
      component: () => import( './views/Projet.vue'),
    },
    {
      path: '/Client',
      name: 'Client',
      component: Client,
    },
    {
      path: '/Salaries',
      name: 'Salaries',
      component: Salaries,
    },
    {
      path: '/CreateProjet',
      name: 'CreateProjet',
      component: CreateProjet,
    },
    {
      path: '/CreateClient',
      name: 'CreateClient',
      component: CreateClient,
    },
    {
      path: '/ProjetDetail',
      name: 'ProjetDetail',
      component: ProjetDetail,
    },
    {
      path: '/CreateSalaries',
      name: 'CreateSalaries',
      component: CreateSalaries,
    },
    {
      path: '/ProjetUpdate',
      name: 'ProjetUpdate',
      component: ProjetUpdate,
    }
     
  ],
});
