<template>
  <div>
    <form @submit.prevent="login">
      <input type="text" v-model="creds.email">
      <input type="password" v-model="creds.password">
      <button type="submit">LOGIN</button>
      <button type="reset">CLEAR</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'LoginForm',
    data() {
      return {
        creds: {
          email: '',
          password: ''
        }
      }
    },
    computed: {},
    methods: {
      login() {
        this.$store.dispatch('login', this.creds)
      }
    }
  }

</script>

<style>


</style>