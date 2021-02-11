<template>
  <li>
    <span>
      <strong>{{ coment.name }}</strong>
      — {{ coment.email }}
    </span>
    <p>{{ coment.body }}</p>
  </li>
</template>

<script>
export default {
  props: {
    coment: Object,
  },
}
</script>

<style scoped>
span {
  text-align: left;
}
li {
  display: flex;
  flex-direction: column;
}
li p::first-letter {
  text-transform: uppercase;
}
li p {
  text-align: justify;
}
span::first-letter {
  text-transform: uppercase;
}
</style>
