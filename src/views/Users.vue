<template>
  <div class="container">
    <h1>Users table</h1>
    <table class="tab">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Website</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in allUsers" :key="user.id">
          <td aria-label="Id">{{ user.id }}</td>
          <td aria-label="Name">{{ user.name }}</td>
          <td aria-label="Email">{{ user.email }}</td>
          <td aria-label="Website">{{ user.website }}</td>

          <button class="btn-info" :key="user.id" @click="showModal(user)">
            Info
          </button>
        </tr>
      </tbody>
    </table>

    <Modal v-if="this.isModal" :company="company" />
  </div>
</template>

<script>
import Modal from '@/components/Modal'
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
      company: [],
    }
  },
  computed: {
    ...mapGetters(['allUsers', 'isModal']),
  },
  methods: {
    ...mapActions(['fetchUsers']),
    ...mapMutations(['clickModal']),
    showModal(user) {
      this.clickModal()
      this.company = user.company
    },
    click() {
      console.log(this.allUsers)
    },
  },
  async mounted() {
    this.fetchUsers()
    console.log(this.allUsers)
  },
  components: {
    Modal,
  },
}
</script>

<style scoped></style>

<style scoped>
table.tab {
  width: 100%;
  border: 0px;
  border-collapse: collapse;
}
table.tab thead {
  font-weight: bold;
}
table.tab td {
  padding: 0.6rem 1rem;
  border-bottom: 1px solid #e8e9eb;
}
table {
  margin: auto;
}
.container {
  margin: 0 10px;
}
.btn-info {
  cursor: pointer;
}
@media screen and (max-width: 650px) {
  table.tab thead {
    display: none;
  }
  table.tab tr {
    display: block;
    margin-bottom: 1rem;
    border-bottom: 2px solid #e8e9eb;
  }
  table.tab td {
    display: block;
    text-align: right;
  }
  table.tab td:before {
    content: attr(aria-label);
    float: left;
    font-weight: bold;
  }
  .btn-info {
    width: 100px;
    border-radius: 5px;
    border: 1px solid #000;
  }
}
</style>
