import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// import HeaderBar from '../components/HeaderBar'
// import HomePage from '../components/HomePage'
import PagesView from '../views/pages/PagesView'
import HomeView from '../views/pages/HomeView'
import MovieView from '../views/pages/MovieView'
import BookView from '../views/pages/BookView'
import StatusView from '../views/pages/StatusView'
import GroupView from '../views/pages/GroupView'
import DetailView from '../views/pages/DetailView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/pages/'
    },
    {
      path: '/pages',
      component: PagesView,
      children: [
        {
          path: '',
          redirect: '/pages/home'
        },
        {
          path: 'home',
          name: 'HomeView',
          component: HomeView
        },
        {
          path: 'movie',
          name: 'MovieView',
          component: MovieView
        },
        {
          path: 'book',
          name: 'BookView',
          component: BookView
        },
        {
          path: 'status',
          name: 'StatusView',
          component: StatusView
        },
        {
          path: 'group',
          name: 'GroupView',
          component: GroupView
        },
        {
          path: 'detail/:id',
          name: 'DetailView',
          component: DetailView
        }
      ]
    }
  ]
})
