<template>
  <div class="container">
    <h1>Create Post</h1>
    <form @submit.prevent="submit">
      <div class="Input">
        <label for="htmlFor">Title</label>
        <input type="text" v-model="title" @blur="isTitleTouched = true" />
        <div class="attention" v-if="!isTitleValid">
          field is filled incorrectly
        </div>
      </div>
      <div class="Input">
        <label for="htmlFor">Body</label>
        <input type="text" v-model="body" @blur="isBodyTouched = true" />
        <div class="attention" v-if="!isBodyValid">
          field is filled incorrectly
        </div>
      </div>
      <div class="but">
        <button :disabled="!isFormError" type="submit">Create</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  data() {
    return {
      htmlFor: Math.random(),
      title: '',
      body: '',
      isTitleTouched: false,
      isBodyTouched: false,
    }
  },
  computed: {
    ...mapGetters(['allPosts']),
    isTitleValid() {
      if (!this.title.trim() && this.isTitleTouched) {
        return false
      } else return true
    },
    isBodyValid() {
      if (!this.body.trim() && this.isBodyTouched) {
        return false
      } else return true
    },

    isFormError() {
      return (
        this.isTitleValid &&
        this.isBodyValid &&
        this.isBodyTouched &&
        this.isTitleTouched
      )
    },
  },
  methods: {
    ...mapMutations(['addNewPost']),
    submit() {
      this.addNewPost({
        title: this.title,
        body: this.body,
        id: this.allPosts.length + 1,
      })
      this.title = this.body = ''
      this.isTitleTouched = this.isBodyTouched = false
    },
  },
}
</script>

<style scoped>
.container {
  margin: 0 10px;
}
.Input {
  margin-bottom: 15px;
}

.Input label {
  margin-bottom: 3px;
  padding: 0px;
  display: block;
  font-weight: bold;
}

.Input input {
  display: block;
  box-sizing: border-box;
  border: 1px solid #000000;
  padding: 7px;
  margin: 0 0 5px;
  width: 100%;
  outline: none;
  transition: all 300ms ease-in-out;
}

form {
  border: 1px solid rgb(0, 0, 0);
  max-width: 600px;
  border-radius: 5px;
  padding: 20px;
  margin: auto;
}
button {
  background-color: blue;
  border-radius: 4px;
  cursor: pointer;
  color: #fff;
  padding: 7px 14px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  border: 1px solid #ccc;
}
.attention {
  text-align: left;
  color: red;
  font-size: 12px;
}
button:disabled {
  background: #ccc;
  color: #000;
  cursor: not-allowed;
}
</style>
