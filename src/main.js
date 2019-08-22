import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;
router.beforeEach((to, from, next) => {
  if (to.matched.length < 0 ){
    next('noD')
  }
  document.title = to.meta.title;
  if (to.meta.requireAuth){
    if (!sessionStorage.getItem('token')){
      next({
        path:'/login',
        query:{
          redirect:to.path
        }
      })
    }else{
      next();
    }
  }else{
    next();
  }

})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
