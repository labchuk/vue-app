<template>
  <div class="wrapper">
    <div class="post">
      <div>
        <slot></slot>
      </div>
      <span>
        <strong>
          {{ id }}.
          {{ title.toUpperCase() }}
        </strong>
        <p>{{ body }}</p>
      </span>
      <div class="coments">
        <hr />
        <p>Coments:</p>
        <ul>
          <ComentItem
            v-for="coment in comentsId"
            :key="coment.id"
            :coment="coment"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ComentItem from '@/components/ComentItem'
export default {
  props: ['id', 'title', 'body'],
  data() {
    return {
      comId: 1,
    }
  },
  computed: {
    ...mapGetters(['allComents', 'allPosts']),
    comentsId() {
      let from = (this.id - 1) * 5
      let to = from + 5
      console.log(this.allComents.slice(from, to))

      return this.allComents.slice(from, to)
    },
  },
  methods: {
    ...mapActions(['fetchComents']),
  },
  mounted() {
    this.fetchComents()
  },
  components: {
    ComentItem,
  },
}
</script>

<style scoped>
.wrapper {
  margin: 0 10px;
}
span h4 {
  display: inline-block;
  margin: 0;
}
span p {
  margin-bottom: 8px;
  text-align: justify;
}
span {
  text-align: left;
}
span p::first-letter {
  text-transform: uppercase;
}
span h4::first-letter {
  text-transform: uppercase;
}
.post {
  border: 1px solid #000;
  border-radius: 7px;
  padding: 0.5rem 2rem;
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin: 20px auto 10px;
}
.coments p {
  text-align: left;
  margin-top: 8px;
}
</style>
