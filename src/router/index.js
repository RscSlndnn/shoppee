import { createRouter, createWebHistory } from 'vue-router';
import ShopApp from '../views/shopApp.vue';
import loginPage from '../views/loginPage.vue';

const routes = [
    { 
        path: '/shop', 
        name: 'shop', 
        component: ShopApp,  
        meta: { requiresAuth: true }
    },

    { 
        path: '/', 
        name: 'login', 
        component: loginPage 
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  

export default router;