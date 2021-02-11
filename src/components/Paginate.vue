<template>
  <div class="pagination">
    <div class="paginate_left" @click="pageButClick(-1)">
      <a href="#">Back</a>
    </div>
    <div
      class="page"
      :class="{ activePage: page === currentPage }"
      v-for="page in pages"
      :key="page"
      @click="pageClick(page)"
    >
      <a href="#">
        {{ page }}
      </a>
    </div>
    <div class="paginate_right" @click="pageButClick(1)">
      <a href="#">Next</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['posts', 'pageClick', 'currentPage', 'pageButClick'],
  computed: {
    pages() {
      return Math.ceil(this.posts.length / 10)
    },
  },
}
</script>

<style scoped>
.pagination {
  display: flex;
  margin-bottom: 30px;
  justify-content: center;
}
.pagination a {
  display: block;
  text-align: center;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 300;
  line-height: 40px;
  color: #999;
  font-size: 18px;
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid #ccc;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
}
.page {
  width: 40px;
  padding: 0 5px;
}
.paginate_left,
.paginate_right {
  width: 70px;
}
.paginate_left {
  padding-right: 5px;
}
@media (max-width: 540px) {
  .page {
    padding: 0 2px;
  }
}
.paginate_right {
  padding-left: 5px;
}
.pagination a:hover {
  border-color: #1f64cc;
  color: #1f64cc;
}
.activePage a {
  border-color: #1f64cc;
  color: #1f64cc;
}
</style>
