<template>
  <div>
    <h1>Welcome to Star Logs</h1>
    <login-form v-if="showLoginForm" />
    <register-form v-if="!showLoginForm" />
    <button @click="showLoginForm= !showLoginForm"> {{showLoginForm ? 'Click to Register': 'Click to Login'}}</button>
  </div>
</template>

<script>
  import LoginForm from '@/components/Auth/LoginForm.vue'
  import RegisterForm from '@/components/Auth/RegisterForm.vue'
  export default {
    name: 'Auth',
    beforeCreate() {
      if (this.$store.state.user._id) {
        this.$router.push({ name: 'home' })
      }
    },
    data() {
      return {
        showLoginForm: true
      }
    },
    components: {
      LoginForm,
      RegisterForm
    },
    computed: {},
    methods: {}
  }

</script>

<style>


</style>