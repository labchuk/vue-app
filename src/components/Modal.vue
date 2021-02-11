<template>
  <div class="container">
    <div class="modal">
      <div class="modal-header">
        <strong>About Company</strong>
        <span><i class="material-icons" @click="closeModal">close</i></span>
      </div>
      <div class="modal-content">
        <p>Name: {{ company.name }}</p>
      </div>
      <div>
        <p>CatchPhrase: {{ company.catchPhrase }}</p>
      </div>
      <div>
        <p>bs: {{ company.bs }}</p>
      </div>
      <div class="modal-footer">
        <button class="btn-modal" @click="closeModal">Close</button>
      </div>
    </div>
    <BackDrop />
  </div>
</template>

<script>
import BackDrop from '@/components/BackDrop'
import { mapMutations } from 'vuex'
export default {
  props: ['company'],
  methods: {
    ...mapMutations(['clickModal']),
    closeModal() {
      this.clickModal()
    },
  },
  computed: {},
  components: {
    BackDrop,
  },
}
</script>

<style scoped>
.modal {
  width: 300px;
  padding: 14px;
  border: 1px solid #000;
  border-radius: 5px;
  background: rgb(224, 223, 223);
  margin: auto;
  z-index: 60;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -125px;
  margin-left: -164px;
}
.modal-header {
  display: flex;
  justify-content: space-between;
}
.modal-footer {
  display: flex;
  justify-content: flex-end;
}
p {
  text-align: left;
}

button {
  cursor: pointer;
}
span i {
  cursor: default;
}
span i:hover {
  color: red;
}
</style>
