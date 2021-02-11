<template>
  <div @click="closeModal" class="container"></div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations(['clickModal']),
    closeModal() {
      this.clickModal()
    },
  },
}
</script>
<style scoped>
.container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 50;
  background: rgba(0, 0, 0, 0.7);
}
</style>
