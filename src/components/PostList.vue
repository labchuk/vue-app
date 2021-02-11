<template>
  <ul>
    <PostItem v-for="post in paginatePost" :key="post.id" :post="post" />
  </ul>
</template>

<script>
import PostItem from '@/components/PostItem'
export default {
  props: ['posts', 'paginatePost'],
  components: {
    PostItem,
  },
}
</script>

<style scoped>
ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
