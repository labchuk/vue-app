import Vue from 'vue'
import VueRouter from 'vue-router'
import Posts from '@/views/Posts'
import CreatePost from '@/views/CreatePost'
import Users from '@/views/Users'
import PostComent from '@/components/PostComent'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Posts',
      component: Posts,
    },
    {
      path: '/post:id',
      name: 'Post',
      component: PostComent,
      props: true,
    },
    {
      path: '/createpost',
      name: 'CreatePost',
      component: CreatePost,
    },
    {
      path: '/users',
      name: 'Users',
      component: Users,
    },
  ],
})
