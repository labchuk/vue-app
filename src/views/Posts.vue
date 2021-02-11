<template>
  <div class="container">
    <h1>Post List</h1>
    <PostList :posts="allPosts" :paginatePost="paginatePost" />
    <Paginate
      :pageClick="pageClick"
      :posts="allPosts"
      :currentPage="currentPage"
      :pageButClick="pageButClick"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PostList from '@/components/PostList'
import Paginate from '@/components/Paginate'
export default {
  data() {
    return {
      perPage: 10,
      currentPage: 1,
    }
  },
  computed: {
    ...mapGetters(['allPosts']),
    paginatePost() {
      let from = (this.currentPage - 1) * this.perPage
      let to = from + this.perPage
      return this.allPosts.slice(from, to)
    },
  },
  methods: {
    ...mapActions(['fetchPosts']),
    pageClick(page) {
      this.currentPage = page
    },
    pageButClick(a) {
      if (
        this.currentPage + a > 0 &&
        this.currentPage + a < this.allPosts.length / 10 + 1
      ) {
        this.currentPage += a
      }
    },
  },
  async mounted() {
    this.fetchPosts()
  },

  components: {
    PostList,
    Paginate,
  },
}
</script>

<style scoped>
.container {
  margin: 0 10px;
}
</style>
