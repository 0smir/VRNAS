import { createMemoryHistory, createRouter } from 'vue-router';

import HomeView from '@/components/pages/HomeView.vue'
import AboutView from '@/components/pages/AboutView.vue'
import ServiceView from '@/components/pages/ServiceView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/service', component: ServiceView }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
});

export default router;