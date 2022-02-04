import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import gallery from '@/pages/gallery'
import booking from '@/pages/booking'
import prices from '@/pages/prices'
import contact from '@/pages/contact'
import test from '@/pages/test'

import { defaultLocale } from '../config/i18n'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: '',  //process.env.BASE_URL,
  routes: [
    {
        path: '/',
        redirect: `/${defaultLocale}/`,
    },
    {
        path: '/:locale',
        component: {
            template: '<router-view />',
        },
        children: [
            {
                path: '/',
                name: 'homePage',
                component: home,
            },
            {
              path: 'gallery',
              name: 'gallery',
              component: gallery,
            },
            {
              path: 'booking',
              name: 'booking',
              component: booking,
            },
            {
              path: 'prices',
              name: 'prices',
              component: prices,
            },
            {
              path: 'contact',
              name: 'contact',
              component: contact,
            },
            {
              path: 'test',
              name: 'Test',
              component: test,
            },
        ],
    },
  ],
})