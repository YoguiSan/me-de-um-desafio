import Vue from 'vue';
import Router from 'vue-router';

import Main from '@/components/Main';
import HelloWorld from '@/components/HelloWorld';
import AssettoCorsa from '@/components/AssettoCorsa';

Vue.use(Router);

export default new Router({
  routes: [
    /*
    {
      path: '*',
      redirect: 'main',
    },
    */
    {
      path: '/',
      name: 'Main',
      component: Main,
    }, {
      path: '/assetto-corsa',
      name: 'AssettoCorsa',
      component: AssettoCorsa,
    }, {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld,
    },
  ],
});
