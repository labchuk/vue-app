<template>
  <div class="wrapper">
    <div class="navbar">
      <h1>Vue App</h1>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" exact active-class="active">Posts</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/createpost" active-class="active"
            >CreatePost</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/users" active-class="active">Users</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations(['changeTitle']),
  },
}
</script>

<style scoped>
.wrapper {
  background: blue;
}
.navbar {
  color: black;
  display: flex;
  justify-content: space-around;
  margin: 0 10px;
}
ul li {
  list-style: none;
  padding-left: 25px;
}
.navbar-nav {
  display: flex;
  align-items: center;
}

.nav-item a {
  text-decoration: none;
  color: black;
}
.nav-item a:hover {
  color: white;
}
a.active {
  color: #fff;
}
@media (max-width: 450px) {
  h1 {
    font-size: 24px;
  }
}
</style>
