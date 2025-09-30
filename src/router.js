import { createWebHistory, createRouter } from 'vue-router';

import HomeView from '@/components/pages/HomeView.vue'
import AboutView from '@/components/pages/AboutView.vue'
import ServiceView from '@/components/pages/ServiceView.vue'
import BlogView from '@/components/pages/BlogView.vue'
import ArticleView from '@/components/pages/ArticleView.vue'

const routes = [
  {
    path: '/',
    name: "home",
    component: HomeView
  },
  {
    path: '/about',
    name: "about",
    component: AboutView,
    meta: {
      breadcrumbs: [
        {
          label: "pages.home.title",
          link: "/"
        },
        {
          label: "pages.about.title"
        }
      ]
    }
  },
  {
    path: '/service',
    name: "service",
    component: ServiceView,
    meta: {
      breadcrumbs: [
        {
          label: "pages.home.title",
          link: "/"
        },
        {
          label: "pages.service.title"
        }
      ]
    }
  },
  {
    path: '/blog',
    name: "blog",
    component: BlogView,
    meta: {
      breadcrumbs: [{
        label: "pages.home.title",
        link: "/"
      },
      {
        label: "pages.blog.title"
      }],
    }
  },
  {
    path: '/blog/:id',
    name: "article",
    component: ArticleView,
    meta: {
      breadcrumbs: [
        {
          label: "pages.home.title",
          link: "/"
        },
        {
          label: "pages.blog.title",
          link: '/blog'
        }
      ],
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;