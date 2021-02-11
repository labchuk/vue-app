<template>
  <li>
    <span>
      <strong>
        {{ post.id }}.
        {{ post.title.toUpperCase() }}
      </strong>
      <p>{{ post.body }}</p>
    </span>
    <div class="btn">
      <router-link
        :to="{
          name: 'Post',
          params: { id: post.id, title: post.title, body: post.body },
        }"
        :key="post.id"
      >
        <button class="material-icons">open_in_new</button>
      </router-link>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    post: Object,
  },
}
</script>

<style scoped>
.btn {
  display: flex;
  align-items: center;
}
.btn button {
  cursor: pointer;
}
span h4 {
  display: inline-block;
  margin: 0;
}
span {
  text-align: left;
  margin-right: 15px;
}
span p {
  text-align: justify;
}
span p::first-letter {
  text-transform: uppercase;
}
span h4::first-letter {
  text-transform: uppercase;
}
li {
  border: 1px solid #000;
  border-radius: 7px;
  margin-bottom: 1rem;
  padding: 0.5rem 2rem;
  display: flex;
  justify-content: space-between;
  max-width: 700px;
}
</style>
