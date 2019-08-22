import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login/login'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import 'u-reset.css'
import Categroy from "./views/Categroy/Categroy";
import Home from "./views/Home";
import Echarts from "./views/echarts/Echarts";
import Goods from "./views/goods/Goods";

Vue.use(ElementUI);
Vue.use(Router);




export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title:'登陆页面'
      }
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect:'/goods',
      meta:{
        title: '后台管理主页面',
        requireAuth:true
      },
      children:[
        {path:'/echarts',component:Echarts,meta:{title:"数据可视化",requireAuth:true}},
        {path:'/categroy',component:Categroy,meta:{title:"分类管理",requireAuth:true}},
        {path:'/goods',component:Goods,meta:{title:"商品详情",requireAuth:true}},
      ]
    }
  ]
})
