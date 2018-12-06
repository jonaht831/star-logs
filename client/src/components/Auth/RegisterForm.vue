<template>
  <div>
    <form @submit.prevent="register">
      <input type="text" v-model="creds.name">
      <input type="text" v-model="creds.email">
      <input type="password" v-model="creds.password">
      <button type="submit">REGISTER</button>
      <button type="reset">CLEAR</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'RegisterForm',
    data() {
      return {
        creds: {
          name: '',
          email: '',
          password: ''
        }
      }
    },
    computed: {},
    methods: {
      register() {
        this.$store.dispatch('register', this.creds)
      }
    }
  }

</script>

<style>


</style>