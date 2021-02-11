import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {
    async fetchPosts({ commit }) {
      const res = await axios.get(
        'https://jsonplaceholder.typicode.com/posts?_limit=100'
      )
      const posts = res.data
      commit('updatePost', posts)
    },
    async fetchUsers({ commit }) {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users')
      const users = res.data
      commit('updateUser', users)
    },
    async fetchComents({ commit }) {
      const res = await axios.get(
        'https://jsonplaceholder.typicode.com/comments?_limit=500'
      )
      const coments = res.data
      commit('updateComent', coments)
    },
  },
  mutations: {
    updatePost(state, posts) {
      state.posts = posts
    },
    updateUser(state, users) {
      state.users = users
    },
    updateComent(state, coments) {
      state.coments = coments
    },
    addNewPost(state, newPost) {
      state.posts.push(newPost)
    },
    clickModal(state) {
      state.modalVisible = !state.modalVisible
    },
  },
  state: {
    posts: [],
    users: [],
    coments: [],
    modalVisible: false,
  },
  getters: {
    allPosts(state) {
      return state.posts
    },
    allUsers(state) {
      return state.users
    },
    allComents(state) {
      return state.coments
    },
    isModal(state) {
      return state.modalVisible
    },
  },
})
