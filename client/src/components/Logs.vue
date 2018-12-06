<template>
  <div class="logs">
    <h2>Ship Log:</h2>
    <div class="row">
      <div v-for="log in logs" class="col-12" :logData="log">
        {{log.body}}
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'logs',
    // components: {
    //   Log
    // }
    computed: {
      logs() {
        return this.$store.state.logs
      }
    }
  }
</script>