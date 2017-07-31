//引入vue
import Vue from 'vue';
import VueRouter from 'vue-router';
import flexible from 'lib-flexible';
//引入页面vue
import App from './app.vue';
//使用路由
Vue.use(VueRouter);
const routes = [
    {path: '/', component: App.components.magic},
    {path: '/components/magic', component: App.components.magic},
    {path: '/components/asura', component: App.components.asura},
    {path: '/components/apocalypse', component: App.components.apocalypse},
    {path: '/components/nenMaster', component: App.components.nenMaster},
    {path: '/components/weaponMaster', component: App.components.weaponMaster}
];
var router = new VueRouter({
    routes
});
//vue实例                       
new Vue({
    el:'#app',
    render: h => h(App),
    router
});