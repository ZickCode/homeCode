//引入vue
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import flexible from 'lib-flexible';
//引入页面vue
import App from './app.vue';
//图片预加载
var images = new Array();
function preload(arr) {  
    for (var i = 0; i < arr.length; i++) {  
        images[i] = new Image()  
        images[i].src = arr[i]  
    }  
}  
preload(['dist/close.png'])  
//使用路由
Vue.use(VueRouter);
Vue.use(VueResource);
const routes = [
    {path: '/', component: App.components.magic},
    {path: '/components/magic', component: App.components.magic},
    {path: '/components/asura', component: App.components.asura},
    {path: '/components/apocalypse', component: App.components.apocalypse},
    {path: '/components/nenMaster', component: App.components.nenMaster},
    {path: '/components/weaponMaster', component: App.components.weaponMaster}
];
const router = new VueRouter({
    routes
});
//vue实例
new Vue({
    el:'#app',
    render: h => h(App),
    router
});